import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAin_kH1FNrpghyN2Dq-fPU6wVuWMjqMvI",
  authDomain: "thelawyers-d16f5.firebaseapp.com",
  projectId: "thelawyers-d16f5",
  storageBucket: "thelawyers-d16f5.appspot.com",
  messagingSenderId: "903743938770",
  appId: "1:903743938770:web:5c62bc5c3a33bbf599cd0b",
  measurementId: "G-8C2RMEDB47"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };
export default app;
