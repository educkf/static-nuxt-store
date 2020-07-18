import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

const firestore = firebase.firestore();

export const Auth = firebase.auth();
export const Database = firestore;
export const Storage = firebase.storage();
export const Firebase = firebase;
export default firebase;
