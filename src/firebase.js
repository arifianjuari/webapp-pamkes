import {
  initializeApp
} from "firebase/app";
import {
  getAuth
} from "firebase/auth";
import {
  getFirestore
} from "firebase/firestore";
import {
  getStorage
} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCpqjE_Xw_8S_aFCTPw1QvM10P5BoYArKk",
  authDomain: "pamkes-pemilu.firebaseapp.com",
  projectId: "pamkes-pemilu",
  storageBucket: "pamkes-pemilu.appspot.com",
  messagingSenderId: "457016464932",
  appId: "1:457016464932:web:821e41f7058568877a6ab1",
  measurementId: "G-ZF53MHPNVB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);