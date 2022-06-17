import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: 'AIzaSyAamJ7Bi4NNsAzfH3JapKoMkgZoaiY-Pco',
    authDomain: 'fiap-67eb6.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com', //não tenho
    projectId: 'fiap-67eb6',
    storageBucket: 'fiap-67eb6.appspot.com',
    messagingSenderId: '841835020682',
    appId: '1:841835020682:web:e183867889ce5fd6b98873',
    measurementId: 'G-measurement-id' // não tenho
}

const app = initializeApp(firebaseConfig)
const database = getFirestore()

export { database }