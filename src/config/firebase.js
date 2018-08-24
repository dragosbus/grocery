import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAd9Ve1xruGrIEaOPnRfzryVSuoUgRT_UE",
    authDomain: "grocery-1d2f4.firebaseapp.com",
    databaseURL: "https://grocery-1d2f4.firebaseio.com/",
    projectId: "grocery-1d2f4",
    messagingSenderId: "803667352012",
};
export default firebase.initializeApp(config);