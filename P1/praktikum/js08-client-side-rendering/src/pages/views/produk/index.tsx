type ProductType = {
  id: string;
  name: string;
  price: bigint; 
  image: string; 
  size: string;
  category: string;
};

// Komponen menerima props 'products' dari parent
const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      {/* Jika tidak ada produk, tampilkan pesan ini */}
      {products.length === 0 && (
        <p style={{ color: '#9ca3af' }}>Tidak ada data produk.</p>
      )}

      
      {products.map((product: ProductType) => (
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
          
          {product.size && <p style={{ margin: '0.25rem 0' }}>Ukuran: {product.size}</p>}
          {product.image && <img src={product.image} alt={product.name} width={200} style={{ marginTop: '10px' }} />}
          
          <p style={{ margin: '0.25rem 0' }}>
            Kategori: <span style={{ backgroundColor: '#dbeafe', padding: '2px 8px', borderRadius: '9999px', fontSize: '0.8rem' }}>
              {product.category}
            </span>
          </p>

        </div>
      ))}
    </div>
  );
};

export default TampilanProduk;