import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBHU7B9pltYV9WXfyIw5qmY9GLir3Y6AKM",
    authDomain: "react-crud-8a9fe.firebaseapp.com",
    projectId: "react-crud-8a9fe",
    storageBucket: "react-crud-8a9fe.appspot.com",
    messagingSenderId: "76294217928",
    appId: "1:76294217928:web:1fb754d8801b1b55df05fd"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);