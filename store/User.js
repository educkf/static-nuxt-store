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

  async SignOut() {
    try {
      const signOut = await Auth.signOut();
      if (signOut) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log("store/User.js SignOut(): ", err);
      return false;
    }
  }

}