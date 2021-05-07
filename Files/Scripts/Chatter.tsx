import React, { useRef } from 'react';
import Message from '../Components/Message';
import { auth, firestore, IUser, database } from './Firebase';
import { 
  writeBatch,
  WriteBatch,
  doc,
  collection,
  Timestamp,
  updateDoc,
  arrayUnion,
  Unsubscribe,
  onSnapshot,
  DocumentSnapshot,
  getDoc,
  setDoc,
  deleteDoc,
  DocumentReference,
  DocumentData,
  query,
  limit,
  orderBy,
  QuerySnapshot,
  DocumentChange,
  startAfter,
} from 'firebase/firestore';
import { ref, set, onValue } from 'firebase/database';
import { signOut } from 'firebase/auth';
import { getAnalytics, logEvent, Analytics } from 'firebase/analytics';
import { getMessaging, FirebaseMessaging, getToken } from 'firebase/messaging';
import { getPerformance, FirebasePerformance } from 'firebase/performance';

let Handle_Error = (Message: string) => {
  console.log('====================');
  console.log(Message);
  console.log('====================');
}
class Msg {
  public Group:  number;
  public local:  boolean;
  public Doc:    DocumentReference;
  public Id:      string;
  public Content: string;
  public Created: Timestamp;
  public Owner:   string;
  public Picture: string;
  public UID:     string;

  private User:   Chatter_User;
  constructor(
    Group:   number,
    local:   boolean,
    Doc:     DocumentReference,
    Id:      string,
    Content: string,
    Created: Timestamp,
    Owner:   string,
    Picture: string,
    UID:     string,

    User:    Chatter_User
  ) {
    this.local   = local;
    this.Group   = Group;
    this.Doc     = Doc;
    this.Id      = Id;
    this.Content = Content;
    this.Created = Created;
    this.Owner   = Owner;
    this.Picture = Picture;
    this.UID     = UID;

    this.User    = User;
  }
  TTS(): void {
    let msg = new SpeechSynthesisUtterance();
    msg.text=`${this.Owner} Said ${this.Content}`;
    window.speechSynthesis.speak(msg);
  }
  Delete(): void {
    deleteDoc(this.Doc);
  }
  Render(): JSX.Element {
    let { Id, Content, Created, Owner, Picture, UID, User, Group } = this;
    let Time: number = Created.toMillis();
    return (
      <Message
        key={Id}
        Group={Group}
        Self={User}
        Owner={UID}
        Username={Owner}
        Picture={Picture}
        Content={Content}
        Time={Time}
        Perms={User.Perms}

        TTS={this.TTS.bind(this)}
        Delete={this.Delete.bind(this)}
      />
    );
  }
}
interface Callback { (evt: Event): void }
class Chatter_User {
  // User Info
  public Id: string;
  public Name: string;
  public Picture: string;
  public Notifications: boolean = false;
  public Servers: Map<string, string> = new Map();

  public Server: { Name: string, Id: string, Channels: Map<string, string> } = { 
    Name: '', Id: '', Channels: new Map() 
  };
  public Channel:  { Name: string, Id: string } = { Name: '', Id: '' };

  public Perms:    string[] = [ '' ];
  public Messages: Map<string, { Time: number, Message: Msg}> = new Map();
  public Typers:  Map<string, { Name: string, Time: number }> = new Map();

  private User:        IUser;
  private Analytics:   Analytics = getAnalytics();
  private Messaging:   FirebaseMessaging = getMessaging();
  private Performance: FirebasePerformance = getPerformance();
  // Listeners
  private UserListener:    Unsubscribe | null = null;
  private ServerListener:  Unsubscribe | null = null;
  private PermsListener:   Unsubscribe | null = null;
  private TypingListener:  Unsubscribe | null = null;
  private TypingInterval:  number      | null = null;

  private Message_Listeners:  Unsubscribe[] = [];
  private Limit: number = 20;
  // Random
  private Type_Interval: number = 0;
  private listeners: { [type: string]: Array<Callback> } = {};
  private Smart_Listener: { [type: string]: Map<number, Callback> } = {};
  constructor(User: IUser) {
    // Ser Public Vars
    this.Id = User.uid;
    this.Name = User.displayName || '';
    this.Picture = User.photoURL || '';
    // Set Private Vars
    this.User = User;

    // Call init functions
    logEvent(this.Analytics, 'login');

    this.SetListeners();
  }
  on(type: string, callback: Callback): { type: string, Key: number } {
    if (!(type in this.Smart_Listener)) this.Smart_Listener[type] = new Map();
    let Key: number = Math.floor(Math.random() * Date.now());
    this.Smart_Listener[type].set(Key, callback);
    return { type, Key };
  }
  off({ type, Key }: { type: string, Key: number }): void {
    if (!(type in this.Smart_Listener && this.Smart_Listener[type].has(Key))) return;
    this.Smart_Listener[type].delete(Key);
  }
  // Event Listener
  addEventListener (type: string, callback: Callback): void {
    if (!(type in this.listeners)) this.listeners[type] = [];
    this.listeners[type].push(callback);
  }
  removeEventListener (type: string, callback: Callback) {
    if (!(type in this.listeners)) return;
    const stack = this.listeners[type];
    // tslint:disable-next-line one-variable-per-declaration
    for (let i = 0, l = stack.length; i < l; i++) {
      if (stack[i] === callback) {
        stack.splice(i, 1);
        return;
      }
    }
  }
  dispatchEvent (event: Event) {
    if (!(event.type in this.listeners || event.type in this.Smart_Listener)) return true;
    if (event.type in this.Smart_Listener) {
      const stack = this.Smart_Listener[event.type].values();
      for (const callback of stack) { callback(event) }
    }
    // Old Implementation here for compat
    if (event.type in this.listeners) {
      const stack = this.listeners[event.type].slice();
      // tslint:disable-next-line one-variable-per-declaration
      for (let i = 0, l = stack.length; i < l; i++) {
        stack[i].call(this, event);
      }
    }
    return !event.defaultPrevented;
  }
  // Destroy
  destroy() {
    if (this.UserListener) this.UserListener();
    if (this.ServerListener) this.ServerListener();
    if (this.PermsListener) this.PermsListener();
    this.Message_Listeners.forEach((Remove: Unsubscribe) => Remove());
    this.Message_Listeners = [];
    if (this.TypingListener) this.TypingListener();
    if (this.TypingInterval) clearInterval(this.TypingInterval);
  }
  // Setters 
  ActiveServer (Server_Id: string) {
    if (!(this.Servers.has(Server_Id) || Server_Id == 'Settings')) return;
    localStorage.setItem('Server', Server_Id);
    this.Server = {
      Name: (this.Servers.get(Server_Id) as string),
      Id: Server_Id,
      Channels: new Map()
    }
    if (Server_Id == 'Settings') return this.dispatchEvent(new Event('ActiveUpdate'));
    // Call A Channel Listener
    this.SetServerListener();
  }
  ActiveChannel (Channel_Id: string) {
    if (!this.Server.Channels.has(Channel_Id)) return;
    this.Channel = { 
      Name: (this.Server.Channels.get(Channel_Id) as string),
      Id: Channel_Id
    }
    this.dispatchEvent(new Event('ActiveUpdate'));
    this.Message_Listeners.forEach((Remove: Unsubscribe) => Remove());
    this.Message_Listeners = [];
    this.Messages = new Map();
    this.SetGeneralListener();
    this.SetMessageListener();
  }
  ActiveChannelName (Channel_Name: string) {
    let Channel_Id: string = "";
    [...this.Server.Channels.entries()].forEach(([k,v]) => {
      if (v == Channel_Name) Channel_Id = k;
    });
    this.ActiveChannel(Channel_Id);
  }
  private async NewUser() {
    let { Id } = this;
    // Make the user a profile with the basic server
    let Server_Info = async (Server_ID: string)  => {
      let Server = await getDoc(
        doc(firestore, 'Servers', Server_ID)
      ).catch(() => ({ exists: () => false }));
      return {
        Name: Server.exists() ? Server.data().Name : null,
        Banned: !Server.exists() ? true : false
      }
    }
    let SID = 'UUw40MdRDcUxdEy00Zuo';
    let Data = await Server_Info(SID);
    if (!Data.Banned) {
      updateDoc(
        doc(firestore, 'Users', Id),
        { Servers: { [SID]: Data.Name } }
      ).catch(() => {
        setDoc(
          doc(firestore, 'Users', Id),
          { Servers: { [SID]: Data.Name } }
        ).catch((err: string) => { Handle_Error(err)});
      });
    }
  }
  // Set out listeners
  private SetListeners() {
    let { Id } = this;
    // User Listener
    this.UserListener = onSnapshot(
      doc(firestore, 'Users', Id), { includeMetadataChanges: true }, 
      async (User: DocumentSnapshot) => {
        if (User.exists()) {
          let Data: DocumentData = User.data(), { Servers } = Data;
          if (User.metadata.hasPendingWrites || !Data || !Servers) return;
          // Determine Current Server And Active
          this.Servers = new Map(Object.entries(Servers));
          if (this.Server.Name == '') {
            let Server: string | null = localStorage.getItem('Server');
            let Active_Server: string = (Server && Servers[Server]) ? Server : Object.keys(Servers)[0];
            this.ActiveServer(Active_Server)
          }
          this.dispatchEvent(new Event('UserUpdate'));
        } else this.NewUser();
      }
    )
  }
  private SetServerListener () {
    let { Id, Server } = this, First: boolean = true;
    if (this.ServerListener) this.ServerListener();
    this.ServerListener = onSnapshot(doc(firestore, 'Servers', Server.Id), 
      async (Server_Snap: DocumentSnapshot) => {
        if (Server_Snap.exists()) {
          interface Server_Type {
            Channels: { [key: string]: string };
            Name: string;
          }
          let Data: DocumentData = Server_Snap.data(), { Channels, Name } = (Data as Server_Type);
          if (!Data || !Channels || !Name) return;
          if (Name != this.Servers.get(Server.Id)) {
            updateDoc(
              doc(firestore, 'Users', Id),
              { Servers: { [Server.Id]: Name } }
            )
          }
          let Servers: [string, string][] = Object.entries(Channels).sort((a: [string , string ], b: [string , string ]) => a[0].localeCompare(b[0]));
          Servers.forEach(([ Key, Id ], i: number) => {
            this.Server.Channels.set(Id, Key.replace(/([^_]*)_/, ''));
            if (i == 0 && First) {
              this.ActiveChannel(Id);
              First = false;
            }
          });
          this.dispatchEvent(new Event('ServerUpdate'));
        }
      }
    )
  }
  private SetGeneralListener () {
    let { Id, Server, Channel } = this;
    if (this.PermsListener) this.PermsListener();
    this.PermsListener = onSnapshot(doc(firestore, 'Servers', Server.Id, 'Users', Id), 
      async (Server_Snap: DocumentSnapshot) => {
        if (Server_Snap.exists()) {
          let Data: DocumentData = Server_Snap.data();
          if (Data.Permissions) this.Perms = Data.Permissions;
        }
      }
    )
    // Typing Watcher
    if (this.TypingListener) this.TypingListener();
    this.TypingListener = onValue(
      ref(database, `Servers/${Server.Id}/${Channel.Id}/`), 
      (snapshot: any) => {
        if (snapshot.exists()) {
          const data  = snapshot.val();
          Object.keys(data).forEach((name: string) => {
            let { username, Time } = data[name];
            if (Date.now() - Time< 5000) this.Typers.set(name, { Name: username, Time });
            else if (this.Typers.has(name)) this.Typers.delete(name);
          });
          this.dispatchEvent(new Event('TypingUpdate'));
        }
      }
    );
    if (typeof this.TypingInterval == 'number') clearInterval(this.TypingInterval);
    //@ts-ignore
    this.TypingInterval = setInterval(() => {
      [...this.Typers.keys()].forEach((Id: string) => {
        let Value = this.Typers.get(Id);
        if (Value && Date.now() - Value.Time< 5000) this.Typers.delete(Id);
      });
      this.dispatchEvent(new Event('TypingUpdate'));
    }, 5000);
  }
  private SetMessageListener () {
    let { Server, Channel, Limit } = this, Group: number = this.Message_Listeners.length;
    let LastMsg = [...this.Messages.values()].sort((a, b) => a.Time-b.Time)[0];
    // Message Listener
    this.Message_Listeners.push(onSnapshot(
      query(
        collection(firestore, 'Servers', Server.Id, 'Channels', Channel.Id, 'Messages'),
        orderBy('Created', 'desc'), 
        ...(LastMsg ?  [ startAfter(LastMsg.Message.Created)] : [ ]),
        limit(Limit)
      ),
      { includeMetadataChanges: false },
      async (Server_Changes: QuerySnapshot) => {
        let Msgs: Map<string, { Time: number, Message: Msg }> = this.Messages;
        Server_Changes.docChanges().forEach((msg: DocumentChange) => {
          if (msg.type != 'removed') {
            const Data: DocumentData = msg.doc.data();
            if (!Data.Created) Data.Created = Timestamp.now();
            let Time: number = Data.Created.toMillis();
            let messageInstance: Msg = new Msg(
              Group,
              msg.doc.metadata.hasPendingWrites,
              doc(firestore, 'Servers', Server.Id, 'Channels', Channel.Id, 'Messages', msg.doc.id), 
              msg.doc.id, 
              Data.Content,
              Data.Created,
              Data.Owner,
              Data.Picture,
              Data.UID,
              this
            )
            Msgs.set(msg.doc.id, { Time, Message: messageInstance });
          } else Msgs.delete(msg.doc.id);
        });
        this.Messages = Msgs;
        this.dispatchEvent(new Event('MessageUpdate'));
      },
      () => {}
    ))
  }
  ScrollUp() {
    if (!(this.Channel.Id && this.Server.Id)) return;
    this.SetMessageListener();
  }
  ScrollDown() {
    if (!this.Message_Listeners.length || this.Message_Listeners.length == 1) return;
    let Removing: Unsubscribe | undefined = this.Message_Listeners.pop();
    if (Removing) Removing();
    [...this.Messages.entries()].forEach(([ Key, { Time, Message } ]) => {
      if (Message.Group == this.Message_Listeners.length) this.Messages.delete(Key);
    });
    this.dispatchEvent(new Event('MessageUpdate'));
  }
  // General Functions
  Notification(On: boolean = true) {
    let { Notifications, Messaging, Id } = this;
    if (!Notifications) {
      Notification.requestPermission().then((result: string) => {
        let Allowed = (result == 'granted' || result == 'default');
        if (Allowed) {
          if (On) {
            getToken(Messaging).then((FCM: string) => {
              updateDoc(doc(firestore, 'Users', Id), { FCM: arrayUnion(FCM) }).catch(Handle_Error);
            }).catch(Handle_Error);
          }
        }
      });
    }
  }
  Type () {
    let { Id, Name, Server, Channel, Type_Interval } = this;
    const TypingRef = ref(database, `Servers/${Server.Id}/${Channel.Id}/${Id}`);
    if (Type_Interval > 20) {
      set(TypingRef, { username: Name, Time: Date.now() });
      this.Type_Interval = 0;
    }
    this.Type_Interval++;
  }
  async Send(Content: string) {
    let { Id, Name, Picture, Server, Channel } = this;
    // Send as batch make sure they write to both to add a basic form of rate limiting
    let batch: WriteBatch = writeBatch(firestore);
    batch.set(
      doc(
        collection(firestore, 'Servers', Server.Id, 'Channels', Channel.Id, 'Messages')
      ),
      { Content, Owner: Name, Created: Timestamp.now(), Picture, UID: Id }
    );
    batch.set(
      doc(firestore, 'Users', Id, 'Data', 'rate'),
      { last_write: Timestamp.now() }, { merge: true }
    );
    batch.commit().catch(() => Handle_Error('you have been rate limited'));
  }
  logout() {
    signOut(auth);
    this.destroy()
  }
}
export { Msg };
export default Chatter_User;