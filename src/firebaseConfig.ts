// firebaseConfig.ts
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKu3u_dLLG7qjnhCmMMg1NM7KVmo6P100",
  authDomain: "listadomp-sanpedrorl.firebaseapp.com",
  projectId: "listadomp-sanpedrorl",
  storageBucket: "listadomp-sanpedrorl.appspot.com",
  messagingSenderId: "132021401800",
  appId: "1:132021401800:web:8a4a94e3f88264cb734dfd",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
