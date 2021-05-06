import React from 'react';

import styles from './Style/Login.module.scss';

import Loader from './Loader';
import Button from './Components/Login_Btn';

let Login = () => {
  return (
    <div className={styles.Container}>
      <Loader />
      <section>
        <Button Type="Google"/>
        <Button Type="Github"/>
        <Button Type="Twitter"/>
      </section>
    </div>
  )
}

export default Login;