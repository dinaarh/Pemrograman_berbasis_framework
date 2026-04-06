import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import MainSection from './MainSection';

const TampilanProduk = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin');
    if (loginStatus === 'true') {
      setIsLogin(true);
    } else {
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
    <>
      <HeroSection />
      <MainSection />
      <div style={{ padding: '20px' }}>
        <p>Selamat datang! Anda sudah login.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default TampilanProduk;