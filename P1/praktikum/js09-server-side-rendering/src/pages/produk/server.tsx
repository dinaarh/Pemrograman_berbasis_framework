import TampilanProduk from '../views/produk';

type ProductType = {
  id: string;
  name: string;
  price: bigint;
  image: string;
  category: string;
};

// Komponen halaman — menerima props dari getServerSideProps
// props.products sudah berisi data saat komponen dirender
const halamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <h1>Halaman Produk Server</h1>
      {/* products sudah terisi — TIDAK perlu skeleton */}
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukServer;

// getServerSideProps: berjalan di SERVER sebelum render
// Dipanggil setiap kali halaman ini diakses oleh browser
export async function getServerSideProps() {
  // WAJIB full URL karena berjalan di server (bukan browser)
  const res = await fetch('http://localhost:3000/api/produk');
  const respone = await res.json();

  // Debug
  // console.log('Data produk yang diambil dari API:', respone);

  return {
    props: {
      // respone.data adalah array produk dari API
      // Nilai default [] mencegah error jika data tidak tersedia
      products: respone.data,
    },
  };
}
