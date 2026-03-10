import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './login.module.css';

const halamanLogin = () => {
  const { push } = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlerLogin = () => {
    // Simulasi: jika username dan password diisi, navigasi ke produk
    if (username && password) {
      localStorage.setItem('isLogin', 'true');
      push('/produk');
    } else {
      alert('Harap isi username dan password!');
    }
  };

  return (
    <div className={styles.login}>
      <div style={{ padding: '20px' }}>
        <h1>Halaman Login</h1>

        {/* Form sederhana */}
        <div>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ display: 'block', marginBottom: '10px' }}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: 'block', marginBottom: '10px' }}
          />
        </div>
      </div>

      {/* Navigasi Imperatif: Login -> Produk */}
      <button onClick={() => handlerLogin()}>
        Login ke Halaman Produk
      </button>

      <br /><br />

      {/* Navigasi Deklaratif: Login <-> Register */}
        <p
        style={{
            color: 'red',
            border: '1px solid red',
            borderRadius: '5px',
            padding: '5px'
        }}>Belum punya akun?</p>
      <Link href='/auth/register'>Ke Halaman Register</Link>
    </div>
  );
};

export default halamanLogin;
