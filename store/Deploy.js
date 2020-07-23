import Axios from 'axios';
import { Auth } from "~/services/firebase";

export const state = () => ({
  list: []
})

export const mutations = {}

export const actions = {
  async deploy() {
    try {

      const token = await Auth.currentUser.getIdToken();

      console.log(token)

      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }

      const response = await Axios.get(`${process.env.DEPLOY_URL}`, config);

      if (response) {
        return response
      
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}