import Link from 'next/link';
import { useRouter } from 'next/router';

const halamanRegister = () => {
  const { push } = useRouter();

  const handlerRegister = () => {
    // Setelah register berhasil, arahkan ke login
    push('/auth/login');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Halaman Register</h1>

      <button onClick={() => handlerRegister()}>
        Daftar Akun
      </button>

      <br /><br />

      {/* Navigasi Deklaratif: Register -> Login */}
      <p>Sudah punya akun?</p>
      <Link href='/auth/login'>Ke Halaman Login</Link>
    </div>
  );
};

export default halamanRegister;
