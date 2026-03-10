import Head from 'next/head';
import styles from '@/styles/404.module.scss';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>

      <div className={styles.error}>
        <img
          src="/page-not-found.png"
          alt="404 illustration"
          className={styles.error__image}
        />
        <div className={styles.error__card}>
          <p className={styles.error__code}>404</p>
          <h1 className={styles.error__title}>
            Halaman Tidak Ditemukan
          </h1>
          <p className={styles.error__desc}>
            Oops! Halaman yang Anda cari tidak ada.
            Mungkin URL salah ketik atau halaman telah dihapus.
          </p>
        </div>
      </div>
    </>
  );
};

export default Custom404;
