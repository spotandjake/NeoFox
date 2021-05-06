import React from 'react';
import styles from './../../Style/Components/Markdown.module.scss';
import Markdown from '../../Scripts/Markdown_Standard';
import Prism, { Token, TokenStream } from 'prismjs';
import hljs from '../../Scripts/hljs';
import { Image } from './Preview';

import Chatter_User from '../../Scripts/Chatter';
// Function
type MyProps = { MD: string, User: Chatter_User };
let Marked = (props: MyProps) => {
  let Tokens: TokenStream = Prism.tokenize(
    props.MD, 
    Markdown
  );
  let Output: Jsx.Element[] = [];
  Tokens.forEach((Token: Token | string, i) => {
    if (!Token) return;
    let Convert = ({ content }: any) => {
      if (typeof content == 'string') return { Text: content, Type: '' };
      let Text: string = '', Output: any = { language: '', Type: '', Url: '' };
      content.forEach((Part: any) => {
        if (typeof Part == 'string') {
          Text += Part;
        } else if (Part.type == 'language') {
          Output['language'] = Part.content.trim();
        } else if (Part.type == 'Type') {
          Output['Type'] = Part.content;
        } else if (Part.type == 'Url') {
          Output['Url'] = Part.content;
        }
      });
      return { Text, Output };
    }
    if (typeof Token == 'string' && Token.trim()) {
      Output.push(<p key={i}>{Token}</p>);
    } else {
      //@ts-ignore
      switch(Token.type) {
        case 'bold':
          Output.push(<strong key={i}>{Convert(Token).Text}</strong>);
          break;
        case 'italic':
          Output.push(<em key={i}>{Convert(Token).Text}</em>);
          break;
        case 'bolditalic':
          Output.push(<strong key={i}><em>{Convert(Token).Text}</em></strong>);
          break;
        case 'strikethrough':
          Output.push(<del key={i}>{Convert(Token).Text}</del>);
          break;
        case 'underline':
          Output.push(<ins key={i}>{Convert(Token).Text}</ins>);
          break;
        case 'code':
          Output.push(<code key={i}>{Convert(Token).Text}</code>);
          break;
        case 'blockquote':
          Output.push(<blockquote key={i} className={styles.blockqoute}>{Convert(Token).Text}</blockquote>);
          break;
        case 'url':
          let { Type:Title, Url:Href } = Convert(Token).Output;
          try {
            Href = encodeURI(Href.replace('javascript:','')).replace(/%25/g, '%');
          } catch (e) { Href = ''; }
          if (Href == '') Output.push(<p key={i}>{Title}</p>);
          else Output.push(<a key={i} href={Href}>{Title||Href}</a>);
          break;
        case 'url-reference':
          let { Type, Url } = Convert(Token).Output;
          try {
            Url = encodeURI(Url.replace('javascript:','')).replace(/%25/g, '%');
          } catch (e) { Url = ''; }
          if (Url == '') Output.push(<p key={i}>{Type}</p>);
          else {
            switch (true) {
              case /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(Url) || Type == 'Image':
              default:
                Output.push(
                  <Image
                    key={i}
                    Url={Url}
                    alt={Type || ''}
                  />
                );
            }
          }
          break;
        case 'code_block':
          let Data = Convert(Token), Txt: string = Data.Text.trim();
          let Highlighted = hljs.getLanguage(Data.Output.language)?hljs.highlight(Txt, { language: Data.Output.language }).value:Txt;
          Output.push(
            <pre key={i}><code dangerouslySetInnerHTML={{ __html: Highlighted }}></code></pre>
          );
          break;
        case 'h1':
          Output.push(<h1 key={i}>{Convert(Token).Text}</h1>);
          break;
        case 'h2':
          Output.push(<h2 key={i}>{Convert(Token).Text}</h2>);
          break;
        case 'h3':
          Output.push(<h3 key={i}>{Convert(Token).Text}</h3>);
          break;
        case 'channel':
          Output.push(<span key={i} className={styles.channel} onClick={() => props.User.ActiveChannelName(Convert(Token).Text)}>#{Convert(Token).Text}</span>);
          break;
        case 'orderedlist':
          Output.push(
            <ol key={i}>
            {Convert(Token).Text.split('\n').map((Text, n) => <li key={n}>{Text}</li>)}
            </ol>
          );
          break;
        case 'unorderedlist':
          Output.push(
            <ul key={i}>
            {Convert(Token).Text.split('\n').map((Text, n) => <li key={n}>{Text}</li>)}
            </ul>
          );
          break;
        case 'horizontalRule':
          Output.push(<hr key={i} />);
          break;
      }
    }
  })
  return (<>{Output}</>);
}


export default Marked;