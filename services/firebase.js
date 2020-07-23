import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {};

try {
  config.apiKey = process.env.API_KEY;
  config.authDomain = process.env.AUTH_DOMAIN;
  config.databaseURL = process.env.DATABASE_URL;
  config.projectId = process.env.PROJECT_ID;
  config.storageBucket = process.env.STORAGE_BUCKET;
  config.messagingSenderId = process.env.MESSAGING_SENDER_ID;
  config.appId = process.env.APP_ID;
  
} catch(err) {
  console.log(err);
}

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

const firestore = firebase.firestore();

export const Auth = firebase.auth();
export const Database = firestore;
export const Storage = firebase.storage();
export const Firebase = firebase;
export default firebase;
