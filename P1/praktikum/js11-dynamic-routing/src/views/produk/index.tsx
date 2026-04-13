import styles from '../../pages/produk/produk.module.scss'; 
import Link from 'next/link';

type ProductType = {
  id: string;
  name: string;
  price: bigint; 
  image: string;
  size?: string; 
  category: string;
};

// Komponen menerima props 'products' dari parent
const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>

      {/* Jika tidak ada produk, tampilkan pesan ini */}
      {products.length === 0 && (
        <p style={{ color: '#9ca3af', textAlign: 'center', marginTop: '1rem' }}>
          Tidak ada data produk.
        </p>
      )}

      <div className={styles.produk__content}>
        {products.length > 0 ? (
        <>
            {/* Menggunakan 'product' (tunggal) agar lebih rapi */}
            {products.map((products: ProductType) => (
              <Link href={`/produk/${products.id}`}key={products.id}className={styles.produk__content__item}>
                {/* Bagian Gambar */}
                <div className={styles.produk__content__item__image}>
                  {products.image && (
                    <img src={products.image} alt={products.name} width={200} />
                  )}
                </div>

                {/* Nama Produk */}
                <h4 className={styles.produk__content__item__name}>
                  {products.name}
                </h4>

                {/* Kategori */}
                <p className={styles.produk__content__item__category}>
                  {products.category}
                </p>

                {/* Menampilkan Ukuran jika datanya tersedia */}
                {products.size && (
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '4px 0' }}>
                    Ukuran: {products.size}
                  </p>
                )}

                {/* Harga */}
                <p className={styles.produk__content__item__price}>
                  Rp {products.price.toLocaleString('id-ID')}
                </p>
              </Link>
            ))}
          </>
        ) : (
          <>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className={styles.produk__content__skeleton}>
                <div className={styles.produk__content__skeleton__image}></div>
                <div className={styles.produk__content__skeleton__name}></div>
                <div className={styles.produk__content__skeleton__category}></div>
                <div className={styles.produk__content__skeleton__price}></div>
              </div>
            ))}
          </>
        )}

      </div>
    </div>
  );
};

export default TampilanProduk;