import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYuKrnc4uT_xu1ytFt7JuUn-baxxnfSfU",
  authDomain: "whatsapp-57f37.firebaseapp.com",
  projectId: "whatsapp-57f37",
  storageBucket: "whatsapp-57f37.appspot.com",
  messagingSenderId: "913477763208",
  appId: "1:913477763208:web:312f85f674aaba25d59f3d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
