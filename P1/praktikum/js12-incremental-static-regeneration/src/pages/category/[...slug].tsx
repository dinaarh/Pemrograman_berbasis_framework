import { useRouter } from 'next/router';

const halamanKategori = () => {
  const { query } = useRouter();
  const slug = query.slug as string[] | undefined;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Halaman Kategori</h1>

      {/* Menampilkan semua parameter URL dalam bentuk list */}
      {slug ? (
        <div>
          <p>Jumlah Segmen: {slug.length}</p>
          <ul>
            {slug.map((segment, index) => (
              <li key={index}>
                Segmen {index + 1}: <strong>{segment}</strong>
              </li>
            ))}
          </ul>
          <p>Path lengkap: {slug.join(' / ')}</p>
        </div>
      ) : (
        <p>Tidak ada parameter kategori</p>
      )}
    </div>
  );
};

export default halamanKategori;
