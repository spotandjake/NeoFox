# NeoFox
NeoFox is a serverless React based chat application, similar to Discord or Slack. It was written with the intent of gaining a better understanding of scaling projects and using React. The project is visible at [here](https://spotandjake.github.io/NeoFox) unfortunately as this project is hosted through github pages invites will not work properly as they make use of `Next` dynamic routes.

# Background
This project uses Firebase Firestore for holding the messages, server and user data and Firebase Realtime Database for managing typing indicators. The infrastructure is somewhat setup for using Firebase Cloud Functions for push notifications although as this would cost money to host I have not configured it at the moment. NeoFox additionally uses Firebase Storage for storing images and files and Firebase Analytics for user data and performance tracking. It is okay to expose the firebase configs as long as you have your firebase security rules configured correctly and additionally your firebase auth restricted to your domain.

# Building
In order to install run:
```
yarn install --immutable
```
and then you can use:
```
yarn dev
```
to run the development server. In order to build the app run:
```
yarn start
```

# Config
In order to run the application locally or on your own server you will need to replace the firebase configurations, replace the `config` in `Firebase.ts` with your configuration it looks something like the one below:
```js
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
```
and replace the storage bucket url in `next.env.d.ts` with your storage bucket, it will look something like:
```js
env: {
  Storage_Url: 'https://storage.googleapis.com/united-rope-234818.appspot.com'
},
```
