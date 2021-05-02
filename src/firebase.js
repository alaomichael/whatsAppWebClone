import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJuMf3nFgCIKj5x_kiKL3rRfpYN4fhABU",
    authDomain: "whatsapp-web-clone-da866.firebaseapp.com",
    projectId: "whatsapp-web-clone-da866",
    storageBucket: "whatsapp-web-clone-da866.appspot.com",
    messagingSenderId: "42216861926",
    appId: "1:42216861926:web:26bd782cdf409735dc8b27",
    measurementId: "G-2H9VLBJT30"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;