import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDjyPVdvoA7cRcyUBTKxbftvD20qxz6ZWg",
    authDomain: "messageapp-47d72.firebaseapp.com",
    projectId: "messageapp-47d72",
    storageBucket: "messageapp-47d72.appspot.com",
    messagingSenderId: "748534126386",
    appId: "1:748534126386:web:f7fcbfb2fa8bfbca7a292b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;