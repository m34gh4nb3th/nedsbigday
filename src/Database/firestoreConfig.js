import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqWPDKpc2Fla-_qHe126yWy11X7v4j4f8",
    authDomain: "nedsbigday.firebaseapp.com",
    databaseURL: "https://nedsbigday.firebaseio.com",
    projectId: "nedsbigday",
    storageBucket: "nedsbigday.appspot.com",
    messagingSenderId: "429152453853",
    appId: "1:429152453853:web:5e21cfdb05b64a756e4734",
    measurementId: "G-V2FZS2S25T"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;