import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Tipe data produk sesuai respons API
type ProductType = {
  id: string;
  name: string;
  price: bigint;
  size: string;
  category: string; 
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
        <div key={product.id} style={{
          border: '1px solid #ddd',
          padding: '1rem',
          marginBottom: '1rem',
          borderRadius: '8px'
        }}>
          <h2>{product.name}</h2>
          <p>Harga: Rp {product.price.toLocaleString('id-ID')}</p>
          <p>Ukuran: {product.size}</p>
          <p>Kategori: <strong>{product.category}</strong></p>
        </div>
      ))}
    </div>
  );
};

export default kategori;