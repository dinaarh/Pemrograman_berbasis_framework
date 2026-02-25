import Link from 'next/link';

const daftarArtikel = [
  { slug: 'pengenalan-nextjs', judul: 'Pengenalan Next.js', tanggal: '2026-02-10' },
  { slug: 'routing-di-nextjs', judul: 'Routing di Next.js', tanggal: '2026-02-15' },
  { slug: 'dynamic-routing', judul: 'Dynamic Routing', tanggal: '2026-02-20' },
];

const BlogPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Daftar Artikel Blog</h1>
      <ul>
        {daftarArtikel.map((artikel) => (
          <li key={artikel.slug} style={{ marginBottom: '10px' }}>
            <Link href={`/blog/${artikel.slug}`}>
              <strong>{artikel.judul}</strong>
            </Link>
            <span> — {artikel.tanggal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
