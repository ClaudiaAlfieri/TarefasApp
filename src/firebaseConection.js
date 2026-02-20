import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "cursoapp-fc016.firebaseapp.com",
  projectId: "cursoapp-fc016",
  storageBucket: "cursoapp-fc016.firebasestorage.app",
  messagingSenderId: "949523323393",
  appId: "1:949523323393:web:e8da0dae45c14945f8be00",
  measurementId: "G-927DCQ9CTQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export {db, auth};