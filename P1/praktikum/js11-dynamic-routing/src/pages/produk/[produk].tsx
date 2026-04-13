import fetcher from '@/utils/swr/fetcher';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import DetailProduk from '../../views/DetailProduct';
import { ProductType } from '@/types/Product.type';

const HalamanProduk = ({ product }: { product: ProductType }) => {
//   const { query } = useRouter();
//   const { data, error, isLoading } = useSWR(
//     query.produk ? `/api/produk/${query.produk}` : null,
//     fetcher
//   );

//   if (isLoading) return <div>Memuat data produk...</div>;
//   if (error) return <div>Gagal memuat data.</div>;

//   return (
//     <div>
//       <DetailProduk products={data?.data} />
//     </div>
//   );
// };
return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};
export default HalamanProduk;

// {/digunakan server-side rendering/}
export async function getServerSideProps({ params }: { params: { produk: string } }) {
  const res = await fetch(
    `http://localhost:3000/api/produk/${params?.produk}`
  );
  const respone = await res.json();
  return {
    props: {
      product: respone.data ?? null,
    },
  };
}
