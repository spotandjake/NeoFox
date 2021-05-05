import React, { useEffect } from 'react';
import styles from '../../Style/Components/Editor.module.scss';

import Upload from './Upload';
import Slate_Editor from './Slate';
import Custom_Editor from './Custom';

import { BrowserView, MobileView } from "react-device-detect";

import Chatter_User from '../../Scripts/Chatter';

class ErrorBoundary extends React.Component<{ fallback: JSX.Element, children?: any }, { hasError: boolean }> {
  public state: { hasError: boolean }= { hasError: false }
  constructor(props: { fallback: JSX.Element, children?: any }) {
    super(props);
  }
  static getDerivedStateFromError() {   
    return { hasError: true };  
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
let Editor = (props: { User: Chatter_User }) => {
  let Fallback = (
    <Custom_Editor
      Send={(Content: string) => props.User.Send(Content)}
      Key={() => props.User.Type()}
    />
  );
  return (
    <section className={styles.Container}>
      <Upload 
        User={props.User}
        Send={(Content: string) =>  props.User.Send(Content)}
      />
      <div className={styles.Slate}>
        <BrowserView>
          <ErrorBoundary fallback={Fallback}>
            <Slate_Editor
              Send={(Content: string) =>  props.User.Send(Content)} 
              Key={() => props.User.Type()}
            />
          </ErrorBoundary>
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