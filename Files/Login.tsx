import React from 'react';

import styles from './Style/Login.module.scss';

import Button from './Components/Login_Btn';

let Login = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.circles}>
        {
          Array.from({length:10},(_, i)=><div key={i}></div>)
        }
      </div>
      <section>
        <Button Type="Google"/>
        <Button Type="Github"/>
        <Button Type="Twitter"/>
      </section>
    </div>
  )
}

export default Login;