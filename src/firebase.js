import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyARkTiUTdWzPwfCZBliAvkfB8DxcDP13Us',
  authDomain: 'clone-1cd3e.firebaseapp.com',
  databaseURL: 'https://clone-1cd3e.firebaseio.com',
  projectId: 'clone-1cd3e',
  storageBucket: 'clone-1cd3e.appspot.com',
  messagingSenderId: '469645705862',
  appId: '1:469645705862:web:73aa69da9e4caf79754707',
  measurementId: 'G-1LSDEKZWCP'
});

// const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
