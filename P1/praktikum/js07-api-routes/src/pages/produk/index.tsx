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
  const [loading, setLoading]   = useState<boolean>(false);
  const [lastRefresh, setLastRefresh] = useState<string>('');


  // useEffect untuk cek login — dicomment untuk sementara
  // useEffect(() => {
  //   const [isLogin, setIsLogin] = useState(false);
  //   const { push } = useRouter();
  //   if (!isLogin) {
  //     push('/auth/login');
  //   }
  // }, []);

  // Fungsi fetch — dipisah agar bisa dipanggil ulang
  const fetchProducts = () => {
    setLoading(true);
    fetch('/api/produk')
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
        // Simpan waktu refresh terakhir
        setLastRefresh(new Date().toLocaleTimeString('id-ID'));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching produk:', error);
        setLoading(false);
      });
  };

    // Panggil fetchProducts saat komponen pertama kali mount
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

      {/* Daftar Produk */}
      {!loading && products.map((product: ProductType) => (
        <div key={product.id} style={{
          border: '1px solid #e5e7eb',
          padding: '1rem',
          marginBottom: '0.75rem',
          borderRadius: '8px',
          backgroundColor: '#f9fafb'
        }}>
          <h2 style={{ margin: '0 0 0.5rem' }}>{product.name}</h2>
          <p style={{ margin: '0.25rem 0' }}>
            Harga: <strong>Rp {product.price.toLocaleString('id-ID')}</strong>
          </p>
          <p style={{ margin: '0.25rem 0' }}>Ukuran: {product.size}</p>
          <p style={{ margin: '0.25rem 0' }}>
            Kategori: <span style={{ backgroundColor: '#dbeafe', padding: '2px 8px', borderRadius: '9999px', fontSize: '0.8rem' }}>
              {product.category}
            </span>
          </p>
        </div>
      ))}

      {/* Tampilkan jika tidak ada produk */}
      {!loading && products.length === 0 && (
        <p style={{ color: '#9ca3af' }}>Tidak ada data produk.</p>
      )}
    </div>
  );
};

export default kategori;