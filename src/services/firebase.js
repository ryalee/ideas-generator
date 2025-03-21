import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAbg5GwHAOmc_0gy5iL9ol4r4XkxkM16A0',
  authDomain: 'ideas-hub-6ecd5.firebaseapp.com',
  projectId: 'ideas-hub-6ecd5',
  storageBucket: 'ideas-hub-6ecd5.firebasestorage.app',
  messagingSenderId: '663802226883',
  appId: '1:663802226883:web:eb47985356ce1ece98da76',
  measurementId: 'G-6157VLLYTG'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);