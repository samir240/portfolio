// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyAiKFn-eqq_D4ze0knxWfMmE_k8bTsptKs",
    authDomain: "chatios-a9e7b.firebaseapp.com",
    databaseURL: "https://chatios-a9e7b.firebaseio.com",
    projectId: "chatios-a9e7b",
    storageBucket: "chatios-a9e7b.firebasestorage.app",
    messagingSenderId: "880168808807",
    appId: "1:880168808807:web:f2d42fb67949c78de8bfc2"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
