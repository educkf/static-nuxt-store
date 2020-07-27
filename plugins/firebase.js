import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseUrl,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

console.log(config);

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const Auth = firebase.auth();
export const Database = firebase.firestore();
export const Storage = firebase.storage();

export default (_, inject) => {
  inject('Auth', firebase.auth());
  inject('Database', firebase.firestore());
  inject('Storage', firebase.storage());
}