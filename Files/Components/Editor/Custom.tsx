import React, { KeyboardEvent } from 'react';
import styles from '../../Style/Components/Editor.module.scss';
let Editor = (props: { Send: Function, Key: Function }) => {
  return (
    <div contentEditable className={styles.textarea} onKeyDown={(e: KeyboardEvent) => {
      let Key: boolean = false,
          target: HTMLElement = (e.target as HTMLElement),
          content: string = target.innerText;
      // Match Keys
      switch (true) {
        case e.keyCode == 13 && !e.shiftKey && (content && content.trim().length > 0):
          props.Send(content.trim());
          // @ts-ignore
          e.target.replaceChildren();
          break;
        case e.keyCode == 9:
          document.execCommand('insertText', false, '\t');
          break;
        default:
          props.Key();
          Key = true;
      }
      if (!Key) e.preventDefault();
    }}
    ></div>
  )
}
export default Editor;