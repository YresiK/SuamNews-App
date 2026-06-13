import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyALH6RsTRHQYbhQyxAaaxeFEfP2140SZf0",
  authDomain: "suannews.firebaseapp.com",
  projectId: "suannews",
  storageBucket: "suannews.firebasestorage.app",
  messagingSenderId: "878227492536",
  appId: "1:878227492536:web:d4a62e5a46a59c0f2eee4d",
  measurementId: "G-DH435ZCSZ7"
};

export const app = initializeApp(firebaseConfig);