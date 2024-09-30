
import { initializeApp } from 'firebase/app';

import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAEJDqvL5cWE1zp2dUPt1yhZUJnyFlgmgw",
  authDomain: "ecommerce-a96b0.firebaseapp.com",
  projectId: "ecommerce-a96b0",
  storageBucket: "ecommerce-a96b0.appspot.com",
  messagingSenderId: "164796600810",
  appId: "1:164796600810:web:95a0e9a3da308ae0c66293",
  measurementId: "G-9F0E7STX40"
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// // Initialize Firestore and Auth
// const db = getFirestore(firebaseApp);
 

export { firebaseApp, auth };



















// import { initializeApp } from 'firebase/app';
// // import Firebase from 'firebase/app';
// // import { getAuth } from 'firebase/auth';
// // import { getFirestore } from 'firebase/firestore';

// import firebase from "./firebase";


// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAEJDqvL5cWE1zp2dUPt1yhZUJnyFlgmgw",
//     authDomain: "ecommerce-a96b0.firebaseapp.com",
//     projectId: "ecommerce-a96b0",
//     storageBucket: "ecommerce-a96b0.appspot.com",
//     messagingSenderId: "164796600810",
//     appId: "1:164796600810:web:95a0e9a3da308ae0c66293",
//     measurementId: "G-9F0E7STX40"
//   };

//   const firebaseApp= initializeApp(firebaseConfig)

//   const db= firebaseApp.firestore();
//   const auth= firebase.auth();

//   export  {db, auth}






