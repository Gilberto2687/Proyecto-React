
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD06zmGMYkUoPKKFps4lJEkG0cpHNfD3PY",
  authDomain: "proyecto-react-c3175.firebaseapp.com",
  projectId: "proyecto-react-c3175",
  storageBucket: "proyecto-react-c3175.appspot.com",
  messagingSenderId: "589197732348",
  appId: "1:589197732348:web:019a0025f54f8e41386a79",
  measurementId: "G-H5LN2FFRLW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };