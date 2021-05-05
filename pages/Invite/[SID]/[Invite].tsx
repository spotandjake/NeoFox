import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import packageJson from '../../../package.json';

import { auth, IUser, firestore } from '../../../Files/Scripts/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { getAnalytics, logEvent, Analytics } from 'firebase/analytics';



// Saves the messaging device token to the datastore.
let Application = () => {
  const router = useRouter(), { SID, Invite } = router.query;
  useEffect(() => {
    if (SID && Invite) {
      const analytics: Analytics = getAnalytics();
      onAuthStateChanged(auth, async (user: IUser | null) => {
        if (user) {
          logEvent(analytics, 'login');
           getDoc(doc(firestore, `Servers/${SID}`)).then((server: any) => {
            if (server.exists()) {
              let Info: any = server.data();
              getDoc(doc(firestore, `Servers/${SID}/Invites/${Invite}`)).then(() => {
                // Perform the change to show them the option to join the server
                console.log(Info);
              }).catch(() => {
                console.log('Invite does not exist');
              });
            }
          }).catch(() => {
            console.log('server does not exist');
          });
        }
      });
    }
  }, []);
  return (
    <div className="Page">
      <Head>
        <title>{packageJson.name} Invite</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="NeoFox Invite" />
      </Head>
      <div>
        <section>
          <h2>Main</h2>
          <button>Join Main</button>
        </section>
      </div>
    </div>
  );
}

export default Application;