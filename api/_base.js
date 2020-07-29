import { Database } from "~/services/firebase";
import dayjs from "dayjs";

export default {
  async list(collectionName) {
    try {
      const querySnapshot = await Database.collection(collectionName).get();
      const list = [];
      querySnapshot.forEach(function (doc) {
        const docObj = {
          ...doc.data(),
          _id: doc.id
        };
        list.push(docObj);
      });
      return list;
    } catch (err) {
      return {
        _status: false,
        _message: "Error api/_base.js: " + err
      };
    }
  },

  async get(collectionName, docId) {
    try {
      const doc = await Database.collection(collectionName)
        .doc(docId)
        .get();
      if (doc.exists)
        return {
          ...doc.data(),
          _id: doc.id,
          _status: true,
          message: "Document found"
        };
      else
        return {
          _status: false,
          _message: "Document not found"
        };
    } catch (err) {
      return {
        _status: false,
        _message: "Error api/_base.js: " + err
      };
    }
  },

  async add(collectionName, data) {
    try {
      const docRef = await Database.collection(collectionName).doc();
      docRef.set({
        _id: docRef.id,
        _createDate: dayjs().format(),
        ...data
      });
      return {
        _status: true,
        _message: "Document created."
      };
    } catch (err) {
      return {
        _status: false,
        _message: "Error api/_base.js: " + err
      };
    }
  },

  async update(collectionName, data) {
    try {
      const docRef = await Database.collection(collectionName).doc(data._id);
      docRef.set({
        _updateDate: dayjs().format(),
        ...data
      });
      return {
        _status: true,
        _message: "Document updated."
      };
    } catch (err) {
      return {
        _status: false,
        _message: "Error api/_base.js: " + err
      };
    }
  },

  async remove(collectionName, docId) {
    try {
      await Database.collection(collectionName)
        .doc(docId)
        .delete();
      return {
        _status: true,
        _message: "Document deleted."
      };
    } catch (err) {
      return {
        _status: false,
        _message: "Error api/_base.js: " + err
      };
    }
  }
};
