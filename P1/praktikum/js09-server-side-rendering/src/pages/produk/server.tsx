import TampilanProduk from '../views/produk';

// Komponen halaman SSR
const halamanProdukServer = () => {
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      {/* Kirim array kosong dulu untuk cek routing */}
      <TampilanProduk products={[]} />
    </div>
  );
};

export default halamanProdukServer;
