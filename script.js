// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB6zrB_yhzQ8xM0_89xkXVP5LeV3mUtj-s",
    authDomain: "hamsterwars-ss.firebaseapp.com",
    databaseURL: "https://hamsterwars-ss.firebaseio.com",
    projectId: "hamsterwars-ss",
    storageBucket: "hamsterwars-ss.appspot.com",
    messagingSenderId: "441256850887",
    appId: "1:441256850887:web:f881e984751a4e3e98d5e2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    // .then(function (obj) {
    //     // console.log(obj);
    //     for(let i = 0; i < obj.length; i++){
    //         db.collection('hamsters').doc().set(obj[i])
    //     }
    //     console.log('DB updated!')
    // })
    .catch(function (error) {
        console.error('Something went wrong!')
        console.error(error);
    })