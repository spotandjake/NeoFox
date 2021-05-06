import React, { useState, useCallback, useMemo } from 'react';
import styles from '../../Style/Components/Editor.module.scss';

import Prism, { Token, TokenStream } from 'prismjs';
import Markdown from '../../Scripts/Markdown_Standard';
import { Slate, Editable, withReact, ReactEditor, RenderLeafProps } from 'slate-react';
import { Text, createEditor, Descendant, Node, BaseEditor } from 'slate';
import { withHistory, HistoryEditor } from 'slate-history';

// ts stuff
type CustomText = { 
  text:       string; 
  bold?:      boolean; 
  italic?:    boolean;
  underlined?:boolean;
  h1?:        boolean;
  h2?:        boolean;
  h3?:        boolean;
  blockquote?:boolean;
  code?:      boolean;
}
declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: { type: 'paragraph'; children: CustomText[] }
    Text: CustomText
  }
}
const serialize = (nodes: Node[]) => nodes.map((n: Node) => Node.string(n)).join('\n');
const initialValue: Descendant[] = [{ type: 'paragraph', children: [{ text: '' } ] }];
const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  let Classes: string[] = Object.keys(leaf).map((N: string) => N != 'text' ? styles[N] : '');
  return (<span {...attributes} className={Classes.join(' ')}>{children}</span>);
}
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
let Editor = (props: { fallback: JSX.Element, Send: Function, Key: Function }) => {
  const [value, setValue] = useState<Descendant[]>(initialValue)
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  const decorate = useCallback(([node, path]) => {
    if (!Text.isText(node)) return [];
    const ranges = [], tokens: TokenStream = Prism.tokenize(node.text, Markdown);
    const getLength = (token: any): number => {
      if (typeof token === 'string') return token.length;
      else if (typeof token.content === 'string') return token.content.length;
      else return (token.content as Token[]).reduce((l, t) => l + getLength(t), 0);
    }
    let start: number = 0;
    for (const token of tokens) {
      const end: number = start + getLength(token);
      if (typeof token !== 'string') {
        ranges.push({
          [token.type]: true,
          anchor: { path, offset: start },
          focus: { path, offset: end },
        });
      }
      start = end;
    }
    return ranges;
  }, []);
  return (
    <ErrorBoundary fallback={props.fallback}>
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Editable
          decorate={decorate}
          renderLeaf={renderLeaf}
          placeholder="Send A Message"
          onKeyDown={e => {
            if (e.keyCode == 13 && !e.shiftKey) {
              e.preventDefault();
              if (serialize(value).trim().length == 0) return;
              props.Send(serialize(value));
              editor.selection = {
                anchor: { path: [0, 0], offset: 0 },
                focus: { path: [0, 0], offset: 0 },
              }
              setValue(initialValue);
            } else props.Key();
          }}
        />
      </Slate>
    </ErrorBoundary>
  )
}
export default Editor;