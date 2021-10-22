// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp ({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-FVPNVDT66N"
});

// Initialize Firebase
//const analytics = getAnalytics(app);

// read from firebase
var db = getDatabase();

export const readMoistureReadings = function(onDataRead) {
    var dbRef = ref(db, "readings/1-moisture");

    get(dbRef)
    .then((snapshot) => {
        if(snapshot.exists()) {
            //console.log(snapshot.val());
            onDataRead(snapshot.val());
            
        }
        else
            console.log("No Data Available");
    }).catch((error) => {
        console.log(error);
    })
    
}

export default app;