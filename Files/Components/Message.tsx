import React from 'react';

import styles from './../Style/Components/Message.module.scss';
import Image from 'next/image';

import { ContextMenu } from 'react-tiny-contextmenu';
import Markdown from './Message/Markdown';

import Chatter_User from '../Scripts/Chatter';

type MyProps = { 
  Self:     Chatter_User,
  Owner:    string,
  Username: string,
  Picture:  string,
  Content:  string,
  Time:     number,
  Perms: string[],

  TTS:    Function,
  Delete: Function,
};
const Message = (props: MyProps) => {
  const contextMenuContainerRef = React.useRef(null);
  const Parsed_Content = React.useRef(null);
  const items: any[] = [
    {
      children: 'Text To Speech',
      onClick: () => props.TTS()
    },
  ];
  if (props.Self.Id == props.Owner || props.Perms.includes('Manage_Messages')) {
    items.push({
      children: 'Delete',
      onClick: () => props.Delete()
    });
  }
  return (
    <>
      <div className={styles.Container} data-self={(props.Self.Id == props.Owner).toString()} ref={contextMenuContainerRef}>
        <div className={styles.Icon}>
          <Image
            src={props.Picture}
            alt={props.Username}
            layout="responsive"
            width={40}
            height={40}
          />
        </div>
        <div className={styles.Content} ref={Parsed_Content}>
          <Markdown MD={props.Content} User={props.Self}/>
        </div>
        <span className={styles.Author}>{ props.Username } • { new Date(props.Time).toLocaleString() }</span>
      </div>
      <ContextMenu target={contextMenuContainerRef} items={items} className={styles.Ctx} itemClassName={styles.Ctx_Item}/>
    </>
  );
}
export default Message;