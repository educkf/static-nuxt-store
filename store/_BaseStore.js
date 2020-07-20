import _base from "@/api/_base";

export const state = () => ({
  list: []
})

export const mutations = {
  SET_LIST(state, payload) {
    state.list = payload;
  }
}

export const actions = {
  async list({ commit }) {
    try {
      const response = await _base.list();
      commit("SET_LIST", response);

      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async single(_, docId) {
    try {
      const response = await _base.get(docId);
      return response;

    } catch (err) {
      console.log(err);
    }
  },

  async add({ dispatch }, itemData) {
    try {
      const response = await _base.add(itemData);
      if (response._status) {
        await dispatch("list");
      }
      return response;

    } catch (err) {
      console.log(err);
    }
  },

  async update({ dispatch }, itemData) {
    try {
      const response = await _base.update(itemData);
      if (response._status) {
        await dispatch("list");
      }
      return response;

    } catch (err) {
      console.log(err);
    }
  },

  async remove({ dispatch }, _baseId) {
    try {
      const response = await _base.remove(_baseId);
      if (response._status) {
        await dispatch("list");
      }
      return response;

    } catch (err) {
      console.log(err);
    }
  }

}