import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsMMHayLi2Qf5QTDhfyFrAyKo2drSSKNw",
    authDomain: "papazone-14da1.firebaseapp.com",
    projectId: "papazone-14da1",
    storageBucket: "papazone-14da1.appspot.com",
    messagingSenderId: "441582757484",
    appId: "1:441582757484:web:866988273ae84a25ddda49",
    measurementId: "G-EVV0E780HL"
  };

const app = !firebase.apps.length 
            ? firebase.initializeApp(firebaseConfig)
            : firebase.app();

            const db = app.firestore();
        
export default db;