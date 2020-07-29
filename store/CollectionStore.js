import Vue from 'vue';
import _base from "@/api/_base";

export const state = () => ({
  collections: [],
  list: []
})

export const mutations = {
  SET_COLLECTION(state, payload) {
    const index = state.collections.findIndex(collection => collection.name === payload.name);

    if (index < 0) {
      state.collections = [...state.collections, payload];

      // Vue.set the new collection list, so it be reactive
      Vue.set(state, payload.name, []);
    }
  },

  SET_LIST(state, payload) {
    state[payload.collection] = payload.data;
  }
}

export const actions = {
  async setupCollections({ commit }) {
    // reference: https://stackoverflow.com/questions/54095215/how-to-get-all-the-image-files-in-a-directory-using-vue-js-nuxt-js
    // webpack method require.context to the files refs of a folder

    const collectionsRef = require.context('~/collections/', true, /\.js$/);
    const collections = collectionsRef.keys();
    
    for(const collection of collections) {
      const collectionContent = collectionsRef(collection);
      if (collectionContent?.default?.name) 
        commit('SET_COLLECTION', collectionContent.default);

    }
  },

  async list({ commit }, [collectionName]) {
    try {
      const response = await _base.list(collectionName);
      
      commit("SET_LIST", {
        collection: collectionName,
        data: response
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async single(_, [collectionName, docId]) {
    try {
      const response = await _base.get(collectionName, docId);
      return response;

    } catch (err) {
      console.log(err);
    }
  },

  async add({ dispatch }, [collectionName, itemData]) {
    try {
      const response = await _base.add(collectionName, itemData);
      if (response._status) {
        await dispatch("list", [collectionName]);
      }
      return response;

    } catch (err) {
      console.log(err);
    }
  },

  async update({ dispatch }, [collectionName, itemData]) {
    try {
      const response = await _base.update(collectionName, itemData);
      if (response._status) {
        await dispatch("list", [collectionName]);
      }
      return response;

    } catch (err) {
      console.log(err);
    }
  },

  async remove({ dispatch }, [collectionName, baseId]) {
    try {
      const response = await _base.remove(collectionName, baseId);
      if (response._status) {
        await dispatch("list", [collectionName]);
      }
      return response;

    } catch (err) {
      console.log(err);
    }
  }

}