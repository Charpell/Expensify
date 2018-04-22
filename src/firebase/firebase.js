import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAGtv3h0A0lMpYI927xgX8AOYVOCv4yXVo",
  authDomain: "expensify-e054c.firebaseapp.com",
  databaseURL: "https://expensify-e054c.firebaseio.com",
  projectId: "expensify-e054c",
  storageBucket: "expensify-e054c.appspot.com",
  messagingSenderId: "878785967539"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };