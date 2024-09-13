import React from 'react';
import styles from './../Style/Components/Login_Btn.module.scss';

import { auth } from './../Scripts/Firebase';
import { 
  AuthProvider, 
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup
} from 'firebase/auth';

type Provider = 'Google' | 'Github' | 'Twitter';
type MyProps = { Type: Provider };
const Button = (props: MyProps) => {
  let Type: Provider = props.Type || 'Google', Auth: AuthProvider, Img: string;
  let Style: string[] = [styles.Button];
  switch(Type) {
    case 'Google':
      Auth = new GoogleAuthProvider();
      Img = '/NeoFox/Images/Google.svg';
      break;
    case 'Github':
      Auth = new GithubAuthProvider();
      Img = '/NeoFox/Images/Github.png';
      break;
    case 'Twitter':
      Auth = new TwitterAuthProvider();
      Img = '/NeoFox/Images/Twitter.svg';
      Style.push(styles.Twitter);
      break;
  }
  return (
    <div className={Style.join(' ')} onClick={() => (signInWithPopup(auth, Auth))}>
      <div>
        <picture>
          <img alt={Type} src={Img} width="18" height="18" />
        </picture>
        <span>Sign in with {Type}</span>
      </div>
    </div>
  )
}
export default Button;