import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import useSWR from 'swr';
import TampilanProduk from '../../views/produk'; 
import fetcher from '../../utils/swr/fetcher';

const Kategori = () => {
  // SWR: menggantikan seluruh useState dan useEffect
  // - data      = respons dari API
  // - error     = object error jika gagal
  // - isLoading = true saat memuat pertama kali, false setelah selesai
  const { data, error, isLoading } = useSWR('/api/produk', fetcher);

  //  pesan jika API gagal dipanggil
  if (error) return <div style={{ padding: '2rem', textAlign: 'center' }}>Gagal memuat data produk...</div>;

  return (
    <div>
      {/*
        Logika:
        - Jika isLoading = true  -> kirim array kosong [] -> TampilanProduk memunculkan SKELETON
        - Jika isLoading = false -> kirim data.data -> TampilanProduk memunculkan KARTU PRODUK ASLI
        ( menggunakan data?.data untuk mencegah error jika data belum siap)
      */}
      <TampilanProduk products={isLoading ? [] : data?.data} />
    </div>
  );
};

export default Kategori;