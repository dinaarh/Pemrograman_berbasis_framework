import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const produk = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    // Cek status login dari localStorage
    const loginStatus = localStorage.getItem('isLogin');
    if (loginStatus === 'true') {
      setIsLogin(true);
    } else {
      // Jika belum login, redirect ke halaman login
      push('/auth/login');
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLogin');
    push('/auth/login');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Produk User Page</h1>
      <p>Selamat datang! Anda sudah login.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default produk;
