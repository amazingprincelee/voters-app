import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

console.log("Hello Everybody");


const firebaseConfig = {
    apiKey: "AIzaSyDKE-HapgSP43wyuV_CJkKAWZbzNpkYfaI",
  authDomain: "voting-app-f133e.firebaseapp.com",
  projectId: "voting-app-f133e",
  storageBucket: "voting-app-f133e.appspot.com",
  messagingSenderId: "123533003871",
  appId: "1:123533003871:web:25f9f9fbd13b7ce0a69fea",
  measurementId: "G-0XJJ2TE9VL"
};




if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 
