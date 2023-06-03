import { initializeApp } from "firebase/app";

import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdjrZCa-2WG82dmHU1aII0g6cRdKYzoQg",
  authDomain: "pet-venture-1777a.firebaseapp.com",
  projectId: "pet-venture-1777a",
  storageBucket: "pet-venture-1777a.appspot.com",
  messagingSenderId: "202804090837",
  appId: "1:202804090837:web:69fcf8f98a1c2eefc20f5c",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "productos"));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

export const addProduct = async (product) => {
  const docRef = await addDoc(collection(db, "productos"), product);
  return docRef;
};
