import dayjs from "dayjs";

export default {
  async list(Database) {
    try {
      const querySnapshot = await Database
        .collection("Blog")
        .orderBy("_createDate", "desc")
        .get();
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

  async get(Database, docId) {
    try {
      const doc = await Database.collection("Blog")
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

  async add(Database, data) {
    try {
      const docRef = await Database.collection("Blog").doc();
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

  async update(Database, data) {
    try {
      const docRef = await Database.collection("Blog").doc(data._id);
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

  async remove(Database, docId) {
    try {
      await Database.collection("Blog")
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
