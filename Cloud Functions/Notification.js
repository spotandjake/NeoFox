/**
 * This is a test implementation of a notification system, using firebase cloud functions.
 * As this would cost money to run it is currently not deployed.
 * 
 * This implementation is more of an example annd is not complete as such it can only ping me.
 */
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.Notifcation = functions.firestore
  .document('Servers/{Sid}/Channels/{Cid}/Messages/{doc}')
  .onCreate(async (snapshot) => {
  // Notification details.
  const text = snapshot.data().Content;
  const payload = {
    notification: {
      title: `${snapshot.data().Owner} Said:`,
      body: text ? (text.length <= 100 ? text : `${text.substring(0, 97)}...`) : '',
      icon: snapshot.data().Picture,
      click_action: 'https://spotandjake.github.io/NeoFox',
    }
  };
  let Pings = [ 'mHvcak8OjqZglBlENhQSLqBOgPB3' ];
  // Get the list of device tokens.
  let Tokens = [];
  for (const Id of Ping) {
    const User = await db.collection(`Users/${Id}`).get();
    if (User.exists() && User.Messaging) {
      Tokens.push(...User.Messaging);
    }
  }
  if (Tokens) {
    // Send notifications to all tokens.
    const response = await admin.messaging().sendToDevice(Tokens, payload);
    await cleanupTokens(response, tokens);
    console.log('Notifications have been sent and tokens cleaned up.');
  }
});