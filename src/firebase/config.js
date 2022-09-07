import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZPma9-KfHRqbXaN6ztncgvpbDN2nNSd8",
  authDomain: "the-entrust-site.firebaseapp.com",
  projectId: "the-entrust-site",
  storageBucket: "the-entrust-site.appspot.com",
  messagingSenderId: "631827717018",
  appId: "1:631827717018:web:fbaad7c36e1d63f822f823",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
