const admin = require("firebase-admin");

// const serviceAccount = require("/home/cracked/Desktop/Projects/SocialApe/Credientials/socialape-9c923-4b7948c22f7d.json");

admin.initializeApp({
  // credential: admin.credential.cert(serviceAccount),
  // storageBucket: "socialape-9c923.appspot.com",
  // databaseURL: "https://socialape-9c923.firebaseio.com",
});

const db = admin.firestore();

module.exports = {
  admin,
  db
};