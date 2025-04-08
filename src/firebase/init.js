import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf1DPQiNRRGBbTCPpRmELt0wCbC-7L7bg",
  authDomain: "manager-task-30a3a.firebaseapp.com",
  projectId: "manager-task-30a3a",
  storageBucket: "manager-task-30a3a.appspot.com",
  messagingSenderId: "546715745115",
  appId: "1:546715745115:web:0b5947433a27316019f87e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
