# NeoFox
A Serverless React Based Chat Application Similar To Discord, Using Firebase.
[REPL](https://replit.com/@Spotandjake/NeoFox)
# HowTo
To get the program runnning replace 
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
with your firebase config inside Firebase.ts
replace 
```js
env: {
  Storage_Url: 'https://storage.googleapis.com/united-rope-234818.appspot.com'
},
``` 
with your storage url inside of next.env.d.ts
runs on node 12 and above
pls make a new node repl. this project uses firebase firestore for holding the messages and server and user data and firebase rtdb for typign indicators. it will soon use cloud functions for notifications and it uses firebase storage for file storage along with firebase analytics and performance.