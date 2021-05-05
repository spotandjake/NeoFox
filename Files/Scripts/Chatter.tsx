//@ts-ignore
import React from 'react';
//@ts-ignore
import Message from '../Components/Message';
//@ts-ignore
import EvtTarget from '@mattkrick/event-target-polyfill';
//@ts-ignore
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
  DocumentChange
  //@ts-ignore
} from 'firebase/firestore';
//@ts-ignore
import { ref, set, onValue } from 'firebase/database';
//@ts-ignore
import { signOut } from 'firebase/auth';
//@ts-ignore
import { getAnalytics, logEvent, Analytics } from 'firebase/analytics';
//@ts-ignore
import { getMessaging, FirebaseMessaging, getToken } from 'firebase/messaging';
//@ts-ignore
import { getPerformance, FirebasePerformance } from 'firebase/performance';

let Handle_Error = (Message: string) => {
  console.log('====================');
  console.log(Message);
  console.log('====================');
}
class Msg {
  private Doc:    DocumentReference;
  public Id:      string;
  public Content: string;
  public Created: Timestamp;
  public Owner:   string;
  public Picture: string;
  public UID:     string;

  private User:   Chatter_User;
  constructor(
    Doc:     DocumentReference,
    Id:      string,
    Content: string,
    Created: Timestamp,
    Owner:   string,
    Picture: string,
    UID:     string,

    User:    Chatter_User
  ) {
    this.Doc     = Doc;
    this.Id      = Id;
    this.Content = Content;
    this.Created = Created;
    this.Owner   = Owner;
    this.Picture = Picture;
    this.UID     = UID;

    this.User    = User;
  }
  TTS() {
    let msg = new SpeechSynthesisUtterance();
    msg.text=`${this.Owner} Said ${this.Content}`;
    window.speechSynthesis.speak(msg);
  }
  Delete() {
    deleteDoc(this.Doc);
  }
  Render() {
    let { Id, Content, Created, Owner, Picture, UID, User } = this;
    let Time = Created.toMillis();
    return (
      <Message
        key={Id}
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
    )
  }
}

class Chatter_User extends EvtTarget {
  // User Info
  public Id: string;
  public Name: string;
  public Picture: string;
  public Notifcations: boolean = false;
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
  private MessageListener: Unsubscribe | null = null;
  private TypingListener:  Unsubscribe | null = null;
  private TypingInterval:  number      | null = null;
  // Random
  private Type_Interval: number = 0;
  constructor(User: IUser) {
    super();
    // Ser Public Vars
    this.Id = User.uid;
    //@ts-ignore
    this.Name = User.displayName;
    //@ts-ignore
    this.Picture = User.photoURL;
    // Set Private Vars
    this.User = User;

    // Call init functions
    logEvent(this.Analytics, 'login');
    this.Notification();

    this.SetListeners();
  }
  // Destory
  destroy() {
    if (this.UserListener) this.UserListener();
    if (this.ServerListener) this.ServerListener();
    if (this.PermsListener) this.PermsListener();
    if (this.MessageListener) this.MessageListener();
    if (this.TypingListener) this.TypingListener();
    if (this.TypingInterval) clearInterval(this.TypingInterval);
  }
  // Setters 
  ActiveServer (Server_Id: string) {
    if (!(this.Servers.has(Server_Id) || Server_Id == 'Settings')) return;
    localStorage.setItem('Server', Server_Id);
    this.Server = {
      //@ts-ignore
      Name: this.Servers.get(Server_Id),
      Id: Server_Id,
      Channels: new Map()
    }
    //@ts-ignore
    if (Server_Id == 'Settings') return this.dispatchEvent(new Event('ActiveUpdate'));
    // Call A Channel Listener
    this.SetServerListener();
  }
  ActiveChannel (Channel_Id: string) {
    if (!this.Server.Channels.has(Channel_Id)) return;
    this.Channel = { 
      //@ts-ignore
      Name: this.Server.Channels.get(Channel_Id),
      Id: Channel_Id
    }
    //@ts-ignore
    this.dispatchEvent(new Event('ActiveUpdate'));
    this.SetMessageListener();
  }
  ActiveChannelName (Channel_Name: string) {
    let Channel_Id: string = "";
    [...this.Server.Channels.entries()].forEach(([k,v]) => {
      if (v == Channel_Name) Channel_Id = k;
    });
    if (!this.Server.Channels.has(Channel_Id)) return;
    this.Channel = { 
      //@ts-ignore
      Name: this.Server.Channels.get(Channel_Id),
      Id: Channel_Id
    }
    //@ts-ignore
    this.dispatchEvent(new Event('ActiveUpdate'));
    this.SetMessageListener();
  }
  private async NewUser() {
    let { Id } = this;
    // Make the user a profile with the basic server
    let Server_Info = async (Server_ID: string)  => {
      let Serv = await getDoc(
        doc(firestore, 'Servers', Server_ID)
      ).catch(() => ({ exists: () => false }));
      return {
        Name: Serv.exists() ? Serv.data().Name : null,
        Banned: !Serv.exists() ? true : false
      }
    }
    let SID = 'UUw40MdRDcUxdEy00Zuo';
    let Data = await Server_Info(SID);
    if (!Data.Banned) {
      updateDoc(
        doc(firestore, 'Users', Id),
        { Servers: { [SID]: Data.Name } }
      ).catch(err => {
        setDoc(
          doc(firestore, 'Users', Id),
          { Servers: { [SID]: Data.Name } }
        ).catch(err => { Handle_Error(err)});
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
          let Data: any = User.data(), { Servers } = Data;
          if (User.metadata.hasPendingWrites || !Data || !Servers) return;
          // Determine Current Server And Active
          //@ts-ignore
          this.Servers = new Map(Object.entries(Servers));
          if (this.Server.Name == '') {
            let Server: string | null = localStorage.getItem('Server');
            let Active_Server: string = (Server && Servers[Server]) ? Server : Object.keys(Servers)[0];
            this.ActiveServer(Active_Server)
          }
           //@ts-ignore
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
          let Data: any = Server_Snap.data(), { Channels, Name } = Data;
          if (!Data || !Channels || !Name) return;
          if (Name != this.Servers.get(Server.Id)) {
            updateDoc(
              doc(firestore, 'Users', Id),
              { Servers: { [Server.Id]: Name } }
            )
          }
           //@ts-ignore
          let ServArr: string[][2] = Object.entries(Channels).sort((a: string[2], b: string[2]) => a[0].localeCompare(b[0]));
           //@ts-ignore
          ServArr.forEach(([ Key, Id ], i: number) => {
            this.Server.Channels.set(Id, Key.replace(/([^_]*)_/, ''));
            if (i == 0 && First) {
              this.ActiveChannel(Id);
              First = false;
            }
          });
           //@ts-ignore
          this.dispatchEvent(new Event('ServerUpdate'));
        }
      }
    )
  }
  private SetMessageListener () {
    let { Id, Server, Channel } = this, First: boolean = true;
    // Permissions listeners
    if (this.PermsListener) this.PermsListener();
    this.PermsListener = onSnapshot(doc(firestore, 'Servers', Server.Id, 'Users', Id), 
      async (Server_Snap: DocumentSnapshot) => {
        if (Server_Snap.exists()) {
          let Data: any = Server_Snap.data();
          if (Data.Permissions) this.Perms = Data.Permissions;
        }
      }
    )
    // Message Listener
    if (this.MessageListener) this.MessageListener();
    this.MessageListener = onSnapshot(
      query(
        collection(firestore, 'Servers', Server.Id, 'Channels', Channel.Id, 'Messages'),
        limit(25), orderBy('Created', 'desc')
      ),
      async (Server_Changes: QuerySnapshot) => {
        let Msgs: Map<string, { Time: number, Message: Msg }> = First ? new Map() : this.Messages;
        if (First) First = false;
        Server_Changes.docChanges().forEach((msg: DocumentChange) => {
          if (msg.type != 'removed') {
            const Data: DocumentData = msg.doc.data();
            if (!Data.Created) Data.Created = Timestamp.now();
            let Time: number = Data.Created.toMillis();
            let messageInstance: Msg = new Msg(
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
        this.Messages = new Map([...Msgs.entries()].sort((a, b) => b[1].Time-a[1].Time));
        //@ts-ignore
        this.dispatchEvent(new Event('MessageUpdate'));
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
          //@ts-ignore
          this.dispatchEvent(new Event('TypingUpdate'));
        }
      }
    );
    if (typeof this.TypingInterval == 'number') clearInterval(this.TypingInterval);
    //@ts-ignore
    this.TypingInterval = setInterval(() => {
      [...this.Typers.keys()].forEach((Id: string) => {
        let Value = this.Typers.get(Id);
        //@ts-ignore
        if (Date.now() - Value.Time< 5000) this.Typers.delete(Id);
      });
      //@ts-ignore
      this.dispatchEvent(new Event('TypingUpdate'));
    }, 5000);
  }
  // General Functions
  Notification() {
    let { Notifcations, Messaging, Id } = this;
    if (!Notifcations) {
      Notification.requestPermission().then((result: string) => {
        let Allowed = (result == 'granted' || result == 'default');
        if (Allowed) {
          getToken(Messaging).then((FCM: string) => {
            updateDoc(doc(firestore, 'Users', Id), { FCM: arrayUnion(FCM) }).catch(Handle_Error);
          }).catch(Handle_Error);
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
    // Send batch related to ratelimiting
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
  BugReport(Content: string) {
    logEvent(this.Analytics, 'Bug_Report', { Content });
  }
  logout() {
    signOut(auth);
    this.destroy()
  }
}
export default Chatter_User;