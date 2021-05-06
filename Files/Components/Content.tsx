import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from './../Style/Components/Content.module.scss';

import Editor from './Editor/Editor';
import Messages from './Messages';

import Chatter_User from '../Scripts/Chatter';

const Content = (props: { User: Chatter_User }) => {
  const [ Typing, setTyping ] = useState([]), [ Active, setActive ] = useState({ Server: props.User.Server, Channel: props.User.Channel }), Mounted = useRef(true);
  useEffect(() => {
    let ActiveUpdate = () => {
      let { Server, Channel } = props.User;
      if (Mounted.current) setActive({ Server, Channel });
    }
    let TypingUpdate = () => {
      let Names: JSX.Element[] = [];
      [...props.User.Typers.values()].forEach(({ Name }) => Names.push(<span key={Name}>{Name}</span>));
      //@ts-ignore
      if (Mounted.current) setTyping(Names);
    }
    props.User.addEventListener('ActiveUpdate',ActiveUpdate.bind(this));
    props.User.addEventListener('TypingUpdate',TypingUpdate.bind(this));
    return () => {
      Mounted.current = false;
      props.User.removeEventListener('ActiveUpdate',ActiveUpdate.bind(this));
      props.User.removeEventListener('TypingUpdate',TypingUpdate.bind(this));
    }
  }, []);
  return (
    <section className={styles.Container}>
      <div className={styles.Top}>
        <div className={styles.Icon}>
          <Image
            src={`${process.env.Storage_Url}/Servers/${Active.Server.Id}/Icon`}
            alt="Server Icon"
            layout="responsive"
            width={32}
            height={32}
          />
        </div>
        <h2 className={styles.Head}>{`${Active.Server.Name}/${Active.Channel.Name}`}</h2>
      </div>
      <Messages User={props.User}/>
      <div className={styles.Typing}>
       {Typing}
      </div>
      <Editor User={props.User} />
    </section>
  );
}
export default Content;