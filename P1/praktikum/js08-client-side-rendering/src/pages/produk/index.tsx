// SEBELUM
import { useEffect, useState } from 'react';
import TampilanProduk from '../views/produk';

const Kategori = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/produk')
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching produk:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
       {loading && <p>Mengambil data...</p>}
       {!loading && <TampilanProduk products={products} />}
    </div>
  );
};
export default Kategori;