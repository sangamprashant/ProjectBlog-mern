// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbWpdkF72B3ffC5nv8xQB5mgRmTtRj5yM",
  authDomain: "portfolio-fbe38.firebaseapp.com",
  projectId: "portfolio-fbe38",
  storageBucket: "portfolio-fbe38.appspot.com",
  messagingSenderId: "291752368516",
  appId: "1:291752368516:web:16880e36229366b7f865d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const storage =getStorage(app);