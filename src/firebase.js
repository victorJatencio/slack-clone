import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4S-N1PUXkVZMXhI1qsMVJkmmbtlahwfM",
  authDomain: "slack-clone-66fd5.firebaseapp.com",
  databaseURL: "https://slack-clone-66fd5.firebaseio.com",
  projectId: "slack-clone-66fd5",
  storageBucket: "slack-clone-66fd5.appspot.com",
  messagingSenderId: "510389770692",
  appId: "1:510389770692:web:758d7f0abcf71146dc2c91",
  measurementId: "G-DMM8SJY4XS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
