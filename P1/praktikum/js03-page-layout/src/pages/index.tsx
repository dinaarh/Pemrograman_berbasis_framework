import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layouts/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Head>
        <title>Praktikum Next.js</title>
      </Head>
      <Navbar />
      <h1 style={{ color: '#1F497D' }}>
        Praktikum Next.js Pages Router
      </h1>
      <br />
      <p>Mahasiswa D4 Pengembangan Web</p>
      <br />

      {/* navigasi */}
      <Link
        href='/about'
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '10px 20px',
          backgroundColor: '#2E75B6',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontSize: '16px'
        }}
      >
        Lihat Profil Saya
      </Link>
    </div>
  )
}