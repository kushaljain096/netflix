import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBmXCrOizjvTW8alTjIWpuFtJ0czbsaIaE",
    authDomain: "netflix-build-f1215.firebaseapp.com",
    projectId: "netflix-build-f1215",
    storageBucket: "netflix-build-f1215.appspot.com",
    messagingSenderId: "654885628301",
    appId: "1:654885628301:web:ccacafdf4abf3b3fff35c4"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore();
  const auth=firebase.auth();

  export{auth};
  export default db;