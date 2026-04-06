import { useEffect, useState } from 'react';
import TampilanProduk from '../views/produk'; 

// Tipe data untuk State
type ProductType = {
  id: string;
  name: string;
  price: bigint;
  image: string;
  size: string;
  category: string;
};

const Kategori = () => { 
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading]   = useState<boolean>(false);
  const [lastRefresh, setLastRefresh] = useState<string>('');

  const fetchProducts = () => {
    setLoading(true);
    fetch('/api/produk')
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
        setLastRefresh(new Date().toLocaleTimeString('id-ID'));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching produk:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Daftar Produk</h1>

      {/* Tombol Refresh Data */}
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button
          onClick={fetchProducts}
          disabled={loading}
          style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: loading ? '#9ca3af' : '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
          }}
        >
          {loading ? 'Memuat...' : '🔄 Refresh Data'}
        </button>
        {lastRefresh && (
          <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            Terakhir diperbarui: {lastRefresh}
          </span>
        )}
      </div>

      {/* Loading Indicator */}
      {loading && <p style={{ color: '#6b7280' }}>Mengambil data...</p>}

      {/* Panggil komponen TampilanProduk dan kirim data products */}
      {!loading && <TampilanProduk products={products} />}
    </div>
  );
};

export default Kategori;