import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwRIJtSnfinQi2yvFTPAcKbnLqa0gtXkM",
  authDomain: "netlink-agencies.firebaseapp.com",
  projectId: "netlink-agencies",
  storageBucket: "netlink-agencies.firebasestorage.app",
  messagingSenderId: "118214463918",
  appId: "1:118214463918:web:20df2a4a4acd4388be383f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
