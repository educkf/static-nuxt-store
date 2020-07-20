import { Auth } from "~/services/firebase.js";

export const state = () => ({})

export const mutations = {}

export const actions = {
  async Login(_, data) {
    try {
      const Login = await Auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log(Login);
      return {
        success: true,
        content: Login
      };
    } catch (err) {
      console.log("store/User.js Login(): ", err);
      return {
        success: false,
        content: err.message
      };
    }
  },

  IsAuth() {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        return true;
      } else {
        return false;
      }
    });
  },

  SignOut() {
    return Auth.signOut().then(() => {
      return true;

    }).catch(err => {
      console.log("store/User.js SignOut(): ", err);
      return false;
    });
  }

}