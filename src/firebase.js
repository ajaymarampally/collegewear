import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({

    apiKey: "AIzaSyAwXTT4tS8XiMzZR6bMvlNDJTcuY6c04Q4",
  
    authDomain: "collegewear-4e8f3.firebaseapp.com",
  
    databaseURL: "https://collegewear-4e8f3-default-rtdb.firebaseio.com",
  
    projectId: "collegewear-4e8f3",
  
    storageBucket: "collegewear-4e8f3.appspot.com",
  
    messagingSenderId: "409250509479",
  
    appId: "1:409250509479:web:7f8f878b64cf7d9ff0a182",
  
    measurementId: "G-L0JMXXP6MG"
  
  });
export const auth = app.auth();

export default app;

