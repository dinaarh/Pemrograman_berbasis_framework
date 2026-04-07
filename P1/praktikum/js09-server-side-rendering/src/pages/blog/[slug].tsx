import { useRouter } from 'next/router';
import Link from 'next/link';

const BlogDetailPage = () => {
  const { query } = useRouter();
  const { slug } = query;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Detail Artikel Blog</h1>
      <p>
        Slug artikel: <strong>{slug}</strong>
      </p>
      <p style={{ marginTop: '10px', color: '#555' }}>
        Anda sedang membaca artikel dengan URL: /blog/{slug as string}
      </p>
      <br />
      <Link href='/blog'>← Kembali ke Daftar Blog</Link>
    </div>
  );
};

export default BlogDetailPage;
