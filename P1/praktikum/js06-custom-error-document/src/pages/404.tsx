import Head from 'next/head';
import styles from '@/styles/404.module.scss';

const Custom404 = () => {
  return (
    <>
      {/* Judul halaman di tab browser */}
      <Head>
        <title>404 - Halaman Tidak Ditemukan | Praktikum Next.js</title>
        <meta
          name="description"
          content="Halaman yang Anda cari tidak ditemukan. Silakan kembali ke halaman utama."
        />
      </Head>

      <div className={styles.error}>
        {/* Gambar ilustrasi dari folder public */}
        <img
          src="/page-not-found.png"
          alt="Ilustrasi halaman tidak ditemukan"
          className={styles.error__image}
        />

        {/* Judul error */}
        <h1 className={styles.error__title}>
          404 - Halaman Tidak Ditemukan
        </h1>

        {/* Deskripsi singkat */}
        <p className={styles.error__desc}>
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
          Periksa kembali URL yang Anda masukkan.
        </p>
      </div>
    </>
  );
};

export default Custom404;
