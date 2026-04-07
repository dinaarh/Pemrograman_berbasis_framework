import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from './firebase';

// Inisialisasi Firestore dari Firebase App
const db = getFirestore(app);

// Fungsi untuk mengambil semua dokumen dari sebuah collection
// Parameter: collectionName — nama collection Firestore (contoh: 'products')
// Return: array of objects dengan id dan semua field dokumen
export async function retrieveProducts(collectionName: string) {
  // getDocs mengambil semua dokumen dalam collection sekaligus
  const snapshot = await getDocs(collection(db, collectionName));

  // Map snapshot menjadi array objek JavaScript
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,           // Document ID dari Firestore
    ...doc.data(),        // Semua field dokumen (name, price, size, dll.)
  }));

  return data;
}
