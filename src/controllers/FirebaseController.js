import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyBole9ROKEvg6pLjynWcYslniOooky3k6k",
    authDomain: "sonora-project-c2488.firebaseapp.com",
    databaseURL: "https://sonora-project-c2488.firebaseio.com",
    projectId: "sonora-project-c2488",
    storageBucket: "gs://sonora-project-c2488.appspot.com",
    messagingSenderId: "1094571934598"
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);
  const storage = firebase.storage();


  const data = {firestore, storage};

  export default data;
