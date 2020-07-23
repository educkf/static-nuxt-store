import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {};
let setup = false;

try {
  config.apiKey = process.env.API_KEY;
  config.authDomain = process.env.AUTH_DOMAIN;
  config.databaseURL = process.env.DATABASE_URL;
  config.projectId = process.env.PROJECT_ID;
  config.storageBucket = process.env.STORAGE_BUCKET;
  config.messagingSenderId = process.env.MESSAGING_SENDER_ID;
  config.appId = process.env.APP_ID;

  setup = true;

} catch(err) {
  console.log(err);
}

if (setup) !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

const auth = setup ? {} : firebase.auth();
const database = setup ? {} : firebase.firestore();
const storage = setup ? {} : firebase.storage()

export const Auth = auth;
export const Database = database;
export const Storage = storage;
