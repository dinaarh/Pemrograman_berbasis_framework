import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './register.module.css';

const TampilanRegister = () => {
  const { push } = useRouter();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    password: '',
    konfirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (formData.password !== formData.konfirmPassword) {
      alert('Password tidak cocok!');
      return;
    }
    console.log('Data Register:', formData);
    push('/auth/login');
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Halaman Register</h1>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor='nama'>Nama Lengkap</label>
          <input
            type='text'
            id='nama'
            name='nama'
            placeholder='Masukkan nama lengkap'
            value={formData.nama}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Masukkan email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Masukkan password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='konfirmPassword'>Konfirmasi Password</label>
          <input
            type='password'
            id='konfirmPassword'
            name='konfirmPassword'
            placeholder='Konfirmasi password'
            value={formData.konfirmPassword}
            onChange={handleChange}
          />
        </div>
        <button className={styles.button} onClick={handleRegister}>
          Daftar Sekarang
        </button>
        <div className={styles.loginLink}>
          Sudah punya akun?{' '}
          <Link href='/auth/login'>Login di sini</Link>
        </div>
      </div>
    </div>
  );
};

export default TampilanRegister;
