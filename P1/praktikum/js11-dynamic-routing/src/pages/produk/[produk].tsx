import fetcher from '@/utils/swr/fetcher';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import DetailProduk from '../../views/DetailProduct';

const HalamanProduk = () => {
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR(
    query.produk ? `/api/produk/${query.produk}` : null,
    fetcher
  );

  if (isLoading) return <div>Memuat data produk...</div>;
  if (error) return <div>Gagal memuat data.</div>;

  return (
    <div>
      <DetailProduk products={data?.data} />
    </div>
  );
};
export default HalamanProduk;