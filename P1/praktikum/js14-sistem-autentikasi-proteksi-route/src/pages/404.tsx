import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/404.module.scss';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan | Praktikum Next.js</title>
        <meta
          name="description"
          content="Halaman tidak ditemukan. Kembali ke halaman utama."
        />
      </Head>

      <div className={styles.error}>
        {/* Gambar ilustrasi */}
        <img
          src="/page-not-found.png"
          alt="Ilustrasi 404 - Halaman tidak ditemukan"
          className={styles.error__image}
        />

        {/* Card konten */}
        <div className={styles.error__card}>
          <p className={styles.error__code}>404</p>
          <h1 className={styles.error__title}>Halaman Tidak Ditemukan</h1>
          <p className={styles.error__desc}>
            Oops! Halaman yang Anda cari tidak ada atau telah dipindahkan.
            Periksa kembali URL yang Anda masukkan.
          </p>

          {/* Tombol kembali ke home menggunakan Next.js Link */}
          <Link href="/" className={styles.error__button}>
            ← Kembali ke Halaman Utama
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;
