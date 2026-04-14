import styles from './hero.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>Daftar Produk Kami</h1>
      <p className={styles.heroSubtitle}>
        Temukan berbagai produk berkualitas tinggi dengan harga terbaik
      </p>
    </section>
  );
};

export default HeroSection;
