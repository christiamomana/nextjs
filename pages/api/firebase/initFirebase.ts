import { getFirestore } from "firebase/firestore";
import { FirebaseOptions, getApp, initializeApp } from "firebase/app";

const config: FirebaseOptions = {
  apiKey: "AIzaSyCEhbZ2a1ip54WUHO6pKnwwnDXOp2YHdIo",
  authDomain: "tienda-9f935.firebaseapp.com",
  projectId: "tienda-9f935",
  storageBucket: "tienda-9f935.appspot.com",
  messagingSenderId: "45506566110",
  appId: "1:45506566110:web:e9f136d5b1863aaadcaf4f",
  measurementId: "G-PND9V9KXG7",
};

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(config);
export const database = getFirestore(firebaseApp);
