import { initializeApp, getApp } from 'firebase/app';
import { getAuth, Auth, User } from 'firebase/auth';
import { getFirestore, FirebaseFirestore } from 'firebase/firestore';
import { getStorage, StorageService } from 'firebase/storage';
import { getDatabase, FirebaseDatabase } from "firebase/database";
const config = {
  apiKey: 'AIzaSyBCpFkdcCLQ9r_rO-R-LquOPDlLK3WG20s',
  authDomain: 'united-rope-234818.firebaseapp.com',
  databaseURL: 'https://united-rope-234818.firebaseio.com',
  projectId: 'united-rope-234818',
  storageBucket: 'united-rope-234818.appspot.com',
  appId: '1:624818190747:web:b668e76214b01773f5c93e',
  measurementId: 'G-ZCJV8L6SPQ',
  messagingSenderId: '624818190747'
};
let App: any;
try {
  App = initializeApp(config);
} catch (err) {
  App = getApp();
}
const firestore: FirebaseFirestore = getFirestore();
const storage: StorageService = getStorage();
const auth: Auth = getAuth(App);
const database: FirebaseDatabase = getDatabase();
export {
  firestore,
  storage,
  auth,
  database
}
export type IUser = User;