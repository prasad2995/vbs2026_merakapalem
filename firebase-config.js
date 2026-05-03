import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZghTU2HdaGGH8Vk3pzopNsMXag-qTjXg",
  authDomain: "vbs-call-to-jesus.firebaseapp.com",
  projectId: "vbs-call-to-jesus",
  storageBucket: "vbs-call-to-jesus.firebasestorage.app",
  messagingSenderId: "317437132073",
  appId: "1:317437132073:web:f2eb9131a15b0f4a698b38",
  measurementId: "G-LTJ97B6L1Z"
};

const churchConfig = {
  apiKey: "AIzaSyDChKseRGUolPq1wYMLsgI7nG0fiw2jfUU",
  authDomain: "lef-church-magatapalli.firebaseapp.com",
  projectId: "lef-church-magatapalli",
  storageBucket: "lef-church-magatapalli.firebasestorage.app",
  messagingSenderId: "381152009664",
  appId: "1:381152009664:web:3cf33c5a4c35ff36a8bc25"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const churchApp = initializeApp(churchConfig, "ChurchApp");
export const churchDb = getFirestore(churchApp);