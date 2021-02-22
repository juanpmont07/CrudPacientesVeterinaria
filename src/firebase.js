import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBN8BFOnf9IAaQcw5OZbGWQI796N89duLc",
  authDomain: "crudpacientesveterinaria.firebaseapp.com",
  projectId: "crudpacientesveterinaria",
  storageBucket: "crudpacientesveterinaria.appspot.com",
  messagingSenderId: "14701663605",
  appId: "1:14701663605:web:77b709aeed264e62f16f3c"
};


  export const firebaseApp = firebase.initializeApp(firebaseConfig)