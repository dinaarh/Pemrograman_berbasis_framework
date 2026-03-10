import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const TampilanRegister = () => {
  const { push } = useRouter();
  const [formData, setFormData] = useState({
    nama: '', email: '', password: '', konfirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    push('/auth/login');
  };

  return (
    /* 1. min-h-screen  → min-height: 100vh */
    /* 2. bg-gray-100   → background-color: #F3F4F6 */
    /* 3. flex          → display: flex */
    /* 4. items-center  → align-items: center */
    /* 5. justify-center → justify-content: center */
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      {/* 6. bg-white, 7. rounded-lg, 8. shadow-md, 9. p-8, 10. w-full */}
      <div className='bg-white rounded-lg shadow-md p-8 w-full max-w-md'>
        {/* 11. text-2xl, 12. font-bold, 13. text-center, 14. mb-6 */}
        <h1 className='text-2xl font-bold text-center mb-6 text-gray-800'>
          Daftar Akun Baru
        </h1>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Nama Lengkap
          </label>
          <input
            type='text' name='nama'
            placeholder='Masukkan nama'
            value={formData.nama}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded px-3 py-2
                       focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
          <input
            type='email' name='email'
            placeholder='Masukkan email'
            value={formData.email}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded px-3 py-2
                       focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
          <input
            type='password' name='password'
            placeholder='Masukkan password'
            value={formData.password}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded px-3 py-2
                       focus:outline-none focus:border-blue-500'
          />
        </div>
        <button
          onClick={handleRegister}
          className='w-full bg-blue-600 text-white py-2 rounded font-semibold
                     hover:bg-blue-700 transition-colors duration-200 mt-2'
        >
          Daftar Sekarang
        </button>
        <p className='text-center text-sm text-gray-500 mt-4'>
          Sudah punya akun?{' '}
          <Link href='/auth/login' className='text-blue-600 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanRegister;
