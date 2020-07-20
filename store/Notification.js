import { Auth } from "~/services/firebase.js";

export const state = () => ({
  icon: null,
  type: null,
  title: null,
  message: null,
  button: null,
  buttonAction: null,
  timeout: null
})

export const mutations = {
  SET_NOTIFICATION(state, payload) {
    state.icon = payload.icon;
    state.type = payload.type;
    state.title = payload.title;
    state.message = payload.message;
    state.button = payload.button;
    state.timeout = payload.timeout;
    state.buttonAction = payload.buttonAction;
  }
}

export const actions = {
  Set({ commit }, data) {
    commit('SET_NOTIFICATION', {
      ...data
    })
  },

  Clear({ commit }) {
    commit('SET_NOTIFICATION', {
      icon: null,
      type: 'default',
      title: null,
      message: null,
      button: null,
      buttonAction: null,
      timeout: null
    })
  },

}