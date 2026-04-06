import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Tipe data produk sesuai respons API
type ProductType = {
  id: string;
  nama: string;
  harga: number;
  ukuran: string;
  warna: string;
};

const kategori = () => {
  // State untuk menyimpan daftar produk
  const [products, setProducts] = useState<ProductType[]>([]);

  // useEffect untuk cek login — dicomment untuk sementara
  // useEffect(() => {
  //   const [isLogin, setIsLogin] = useState(false);
  //   const { push } = useRouter();
  //   if (!isLogin) {
  //     push('/auth/login');
  //   }
  // }, []);

  // useEffect untuk fetch data produk dari API
  useEffect(() => {
    fetch('/api/produk')
      .then((response) => response.json())
      .then((responsedata) => {
        // console.log('Data produk:', responsedata.data);
        setProducts(responsedata.data);
      })
      .catch((error) => {
        console.error('Error fetching produk:', error);
      });
  }, []); // [] = hanya dijalankan sekali saat komponen mount

  return (
    <div>
      <h1>Daftar Produk</h1>
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <h2>{product.nama}</h2>
          <p>Harga: {product.harga}</p>
          <p>Ukuran: {product.ukuran}</p>
          <p>Warna: {product.warna}</p>
        </div>
      ))}
    </div>
  );
};

export default kategori;