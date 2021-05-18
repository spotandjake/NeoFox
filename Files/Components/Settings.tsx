import React, { useRef, useState, useEffect } from 'react';

import styles from './../Style/Components/Settings.module.scss';

import Chatter_User from '../Scripts/Chatter';
import Image from 'next/image';

type MyProps = { User: Chatter_User };
const Settings = (props: MyProps) => {
  const [ Content, setContent ] = useState<JSX.Element>(<></>);
  const CheckBox = useRef<HTMLInputElement>(null), NotifBox = useRef<HTMLInputElement>(null), ServerCode = useRef<HTMLInputElement>(null), [ Servers, setServers ] = useState<JSX.Element[]>([]);
  useEffect(() => {
    let UserUpdate = () => {
      if (NotifBox)
        //@ts-ignore
        NotifBox.current.checked = Notification.permission == 'granted';
      if (CheckBox)
        //@ts-ignore
        CheckBox.current.checked = (localStorage.getItem('Theme') || 'dark') == 'dark';
      let Servers = props.User.Servers;
      setServers(
        [...Servers.keys()].map((Id: string, i: number) => {
          let Name = Servers.get(Id);
          return (
            <div className={styles.Server} key={i}>
              <div className={styles.ServerPicture}>
                <Image
                  src={`${process.env.Storage_Url}/Servers/${Id}/Icon`}
                  alt={Name}
                  layout="responsive"
                  width={40}
                  height={40}
                />
              </div>
              <h1>{Name}</h1>
              <div 
                className={styles.Icon}
                onClick={() => {
                  props.User.LeaveServer(Id);
                }}
              >
                <Image
                  src={'/Icons/Leave.svg'}
                  alt={'Leave'}
                  layout="responsive"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          );
        })
      )
    }
    props.User.addEventListener('UserUpdate', UserUpdate);
    UserUpdate();
    return () => props.User.removeEventListener('UserUpdate', UserUpdate);
  }, []);
  return (
    <section className={styles.Container}>
      <h1>Settings</h1>
      <div>
        <h2>Account</h2>
        <div className={styles.Card}>
          <div className={styles.ProfilePicture}>
            <Image
              src={props.User.Picture}
              alt={props.User.Name}
              layout="responsive"
              width={32}
              height={32}
            />
          </div>
          <h1>{props.User.Name}</h1>
          <div 
            className={styles.Icon}
            onClick={() => {
              props.User.logout();
            }}
          >
            <Image
              src={'/Icons/Logout.svg'}
              alt={'Logout'}
              layout="responsive"
              width={40}
              height={40}
            />
          </div>
        </div>
         <h2>Preferences</h2>
         <div className={styles.Card}>
          <label className={styles.Switch}>
            <input
              ref={CheckBox}
              type="checkbox" onChange={() => {
                let theme: string = (localStorage.getItem('Theme') || 'dark') == 'dark' ? 'light' : 'dark';
                document.documentElement.dataset.theme = theme;
                localStorage.setItem('Theme', theme);
                //@ts-ignore
                CheckBox.current.checked = theme == 'dark';
              }}
            />
            <span className={styles.Slider}></span>
          </label>
          <h1>Dark Mode</h1>
        </div>
        <div className={styles.Card}>
          <label className={styles.Switch}>
            <input
              ref={NotifBox}
              type="checkbox" onChange={() => {
                props.User.Notification(NotifBox.current?.checked);
              }}
            />
            <span className={styles.Slider}></span>
          </label>
          <h1>Notifications</h1>
        </div>
        <a className={styles.Button} style={{ marginTop: 'auto' }}
          href={'https://github.com/spotandjake/NeoFox/issues/new?assignees=&labels=&template=bug_report.md&title='}
        >
          <span className={styles.Center}>Report Bug</span>
        </a>
      </div>
      <div className={styles.Servers}>
        <h2>Servers</h2>
        <div className={styles.ServerContent}>
          <div>{Servers}</div>
          <div className={styles.ServerBtns}>
            <div className={styles.Button} onClick={(() => props.User.logout())}>
              <span className={styles.Center}>Create Server</span>
            </div>
            <div className={styles.Input}>
              <input type="text" placeholder="Please Enter Code" ref={ServerCode}/>
              <div 
                className={styles.Button} 
                onClick={async () => {
                  if (ServerCode.current && ServerCode.current.value) {
                    let Result: string = await props.User.JoinServer(ServerCode.current.value);
                    alert(Result);
                  } else {
                    // TODO: Make a nice gui 
                    alert("Please Fill out the Code");
                  }
                }}
              >
                <span className={styles.Center}>Join Server</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Content}
    </section>
  );
}
export default Settings;