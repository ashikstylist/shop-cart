import firebase from "firebase/app"
import "firebase/auth"

const fire = firebase.initializeApp({
    apiKey: "AIzaSyDgJIl-eHwzmnXSCZmCkGJAHkUtfKxejaw",
    authDomain: "auth-shopping.firebaseapp.com",
    projectId: "auth-shopping",
    databaseUrl : "https://auth-shopping-default-rtdb.firebaseio.com/",
    storageBucket: "auth-shopping.appspot.com",
    messagingSenderId: "173521338827",
    appId: "1:173521338827:web:ba51deff757016f80f764e"
})

export const auth = fire.auth()
export default fire