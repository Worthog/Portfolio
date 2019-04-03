import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHerBsnCOV1F9GZZWa6deRwpEafr5O2V8",
    authDomain: "portfolio-dbs.firebaseapp.com",
    databaseURL: "https://portfolio-dbs.firebaseio.com",
    projectId: "profile-dbs",
    storageBucket: "portfolio-dbs.appspot.com",
    messagingSenderId: "503344706898"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;