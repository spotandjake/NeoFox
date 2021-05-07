import React, { useRef, useState, useEffect } from 'react';

import styles from './../Style/Components/Settings.module.scss';

import Chatter_User from '../Scripts/Chatter';

type MyProps = { User: Chatter_User };
const Settings = (props: MyProps) => {
  const [ Content, setContent ] = useState<JSX.Element>(<></>);
  const CheckBox = useRef<HTMLInputElement>(null), NotifBox = useRef<HTMLInputElement>(null), [ Servers, setServers ] = useState<JSX.Element[]>([]);
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
              <picture>
                <img alt={Name} src={`${process.env.Storage_Url}/Servers/${Id}/Icon`} />
              </picture>
              <h1>{Name}</h1>
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
          <picture>
            <img alt={props.User.Name || 'Unkown'} src={props.User.Picture || ''} />
          </picture>
          <h1>{props.User.Name}</h1>
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
        <div className={styles.Button} onClick={(() => props.User.logout())}>
          <span className={styles.Center}>Logout</span>
        </div>
      </div>
      <div className={styles.Servers}>
        <h2>Servers</h2>
        <div>{Servers}</div>
      </div>
      {Content}
    </section>
  );
}
export default Settings;