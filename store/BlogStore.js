import BlogApi from "@/api/BlogApi";

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
      const response = await BlogApi.list();
      commit("SET_LIST", response);

      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async single(_, postId) {
    try {
      const response = await BlogApi.get(postId);
      return response;

    } catch (err) {
      console.log(err);
    }
  },

  async add({ dispatch }, postData) {
    try {
      const response = await BlogApi.add(postData);
      if (response._status) {
        await dispatch("list");
      }
      return response;

    } catch (err) {
      console.log(err);
    }
  },

  async update({ dispatch }, postData) {
    try {
      const response = await BlogApi.update(postData);
      if (response._status) {
        await dispatch("list");
      }
      return response;

    } catch (err) {
      console.log(err);
    }
  },

  async remove({ dispatch }, _postId) {
    try {
      const response = await BlogApi.remove(_postId);
      if (response._status) {
        await dispatch("list");
      }
      return response;

    } catch (err) {
      console.log(err);
    }
  }
}