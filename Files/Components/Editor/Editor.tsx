import React, { useEffect } from 'react';
import styles from '../../Style/Components/Editor.module.scss';

import Upload from './Upload';
import Slate_Editor from './Slate';
import Custom_Editor from './Custom';

import { BrowserView, MobileView } from "react-device-detect";

import Chatter_User from '../../Scripts/Chatter';

let Editor = (props: { User: Chatter_User }) => {
  let Fallback = (
    <Custom_Editor
      Send={(Content: string) => props.User.Send(Content)}
      Key={() => props.User.Type()}
    />
  );
  return (
    <section className={styles.Container} onKeyDown={(e) => {
      if (e.key == "ArrowUp") {
        props.User.ScrollUp();
      } else if (e.key == "ArrowDown") {
        props.User.ScrollDown();
      }
    }}>
      <Upload 
        User={props.User}
        Send={(Content: string) =>  props.User.Send(Content)}
      />
      <div className={styles.Slate}>
        <BrowserView>
          <Slate_Editor
            fallback={Fallback}
            Send={(Content: string) =>  props.User.Send(Content)} 
            Key={() => props.User.Type()}
          />
        </BrowserView>
        <MobileView>
          <Custom_Editor
            Send={(Content: string) =>  props.User.Send(Content)}
            Key={() => props.User.Type()}
          />
        </MobileView>
      </div>
    </section>
  )
}
export default Editor;