import { Auth } from "~/services/firebase";
import Axios from 'axios';

export const state = () => ({
  list: []
})

export const mutations = {}

export const actions = {
  async deploy() {
    try {

      const token = await Auth.currentUser.getIdToken();

      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }

      const response = await Axios.get(`${(process.env.deployUrl || process.env.DEPLOY_URL)}`, config);

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