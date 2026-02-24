import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <Head>
        <title>About - Mahasiswa</title>
      </Head>

      <h1 style={{ color: '#1F497D', marginBottom: '1.5rem' }}>
        Profil Mahasiswa
      </h1>

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ padding: '8px', fontWeight: 'bold',
                         backgroundColor: '#D5E8F0', width: '40%' }}>
              Nama Mahasiswa
            </td>
            <td style={{ padding: '8px' }}>Dina Rahmawati</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', fontWeight: 'bold',
                         backgroundColor: '#D5E8F0' }}>
              NIM
            </td>
            <td style={{ padding: '8px' }}>2341720050</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', fontWeight: 'bold',
                         backgroundColor: '#D5E8F0' }}>
              Program Studi
            </td>
            <td style={{ padding: '8px' }}>
              D4  Teknik Informatika
            </td>
          </tr>
        </tbody>
      </table>
      {/* navigasi */}
      <Link
        href='/'
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
        Kembali ke Beranda
      </Link>
    </div>
  )
}