import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCnvEYlJweNU8-NL-5QvKi5_x1SDyLJqi0',
  authDomain: 'loginauthorization-9ca0c.firebaseapp.com',
  projectId: 'loginauthorization-9ca0c',
  storageBucket: 'loginauthorization-9ca0c.appspot.com',
  messagingSenderId: '202298055779',
  appId: '1:202298055779:web:a93ffc63d9504a8962ac56'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)