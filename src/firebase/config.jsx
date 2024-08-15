import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDYTma4ziHDvP02F6TPfW91iNKWAvvUQGs",
    authDomain: "olx-react-61045.firebaseapp.com",
    projectId: "olx-react-61045",
    storageBucket: "olx-react-61045.appspot.com",
    messagingSenderId: "962304398825",
    appId: "1:962304398825:web:5b579cf92a3a609555e778"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
 
  export default firebaseApp;