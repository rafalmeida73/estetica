import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDERID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    console.log(firebaseConfig)
    this.app = app.database();
    this.storage = app.storage();
  }

  login(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password)
  }

  async register(name, email, password) {
    await app.auth().createUserWithEmailAndPassword(email, password)

    const uid = app.auth().currentUser.uid;

    return app.database().ref('usuarios').child(uid).set({
      nome: name
    })
  }

  logout = async () => {
    await app.auth().signOut()
      .catch((error) => {
        console.log(error)
      });

    localStorage.removeItem("nome");
  }

  isInitialized() {
    return new Promise(resolve => {
      app.auth().onAuthStateChanged(resolve);
    })
  }

  getCurrent() {
    return app.auth().currentUser && app.auth().currentUser.email
  }

  getCurrentUid() {
    return app.auth().currentUser && app.auth().currentUser.uid
  }

  async getUserName(callback) {
    if (!app.auth().currentUser) {
      return null;
    }

    const uid = app.auth().currentUser.uid;
    await app.database().ref('usuarios').child(uid)
      .once('value').then(callback);
  }

  async getPost(id, callback) {
    await app.database().ref('posts').child(id)
      .once('value').then(callback).catch(error => {
        return null
      });
  }

  async deletePost(id) {
    await app.database().ref('posts').child(id).remove();
  }

  async editPost(id, data) {
    await app.database().ref('posts').child(id).set(data);
  }
}

export default new Firebase();