import Link from 'next/link';

const ProfilePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Halaman Profile</h1>
      <p>Nama: Dina Rahmawati</p>
      <p>NIM: 2341720050</p>
      <p>Prodi: D4 Teknik Informatika</p>
      <br />
      <Link href='/profile/edit'>
        <button style={{ padding: '8px 16px', backgroundColor: '#1F3864', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
          Edit Profile
        </button>
      </Link>
    </div>
  );
};

export default ProfilePage;
