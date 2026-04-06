import styles from './main.module.css';

const dummyProduk = [
  { id: 1, nama: 'Ultra Light Down Jacket', harga: 'Rp 699.000' },
  { id: 2, nama: 'AIRism Cotton T-Shirt', harga: 'Rp 299.000' },
  { id: 3, nama: 'Heattech Extra Warm Leggings', harga: 'Rp 349.000' },
  { id: 4, nama: 'Kando Pants', harga: 'Rp 599.000' },
  { id: 5, nama: 'Flannel Checked Long Sleeve Shirt', harga: 'Rp 449.000' },
  { id: 6, nama: 'Pile-Lined Fleece Full-Zip Jacket', harga: 'Rp 799.000' },
];

const MainSection = () => {
  return (
    <section className={styles.main}>
      <h2>Semua Produk</h2>
      <div className={styles.grid}>
        {dummyProduk.map((produk) => (
          <div key={produk.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{produk.nama}</h3>
            <p className={styles.cardPrice}>{produk.harga}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSection;