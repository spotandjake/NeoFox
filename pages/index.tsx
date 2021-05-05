import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import packageJson from './../package.json';
// import firebase
import { auth, IUser } from './../Files/Scripts/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
// Import Chatter
import Chatter_User from '../Files/Scripts/Chatter';
// Import the pages
import Loader from './../Files/Loader';
import Login from './../Files/Login';
import Main from './../Files/Main';


let Application = () => {
  const [ View, setView ] = useState(<Loader />);
  useEffect(() => {
    document.documentElement.dataset.theme = window.localStorage.getItem('Theme') || 'dark';
    onAuthStateChanged(auth, async (user: IUser | null) => {
      if (user) {
        let User: Chatter_User = new Chatter_User(user);
        setView(<Main User={User} />);
      } else setView(<Login />);
    });
  }, []);
  return (
    <div className="Page">
      <Head>
        <title>{packageJson.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="A Serverless React Based Chat Application Similar To Discord, Using Firebase." />
      </Head>
      {View}
    </div>
  );
}

export default Application;