import firebase from 'firebase';
const config={
            apiKey: "AIzaSyDPTUEH4IhIhOCeGmImbwsrIEP3CZV_wM8",
            authDomain: "baotintuc-6037d.firebaseapp.com",
            databaseURL: "https://baotintuc-6037d.firebaseio.com",
            projectId: "baotintuc-6037d",
            storageBucket: "baotintuc-6037d.appspot.com",
            messagingSenderId: "468762693823"
};
export default firebaseConf = firebase.initializeApp(config);