import Link from 'next/link';

const EditProfilePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Edit Profile</h1>
      <form>
        <div style={{ marginBottom: '12px' }}>
          <label>Nama:</label><br />
          <input type='text' defaultValue='Dina Rahmawati' style={{ padding: '6px', width: '300px' }} />
        </div>
        <div style={{ marginBottom: '12px' }}>
          <label>NIM:</label><br />
          <input type='text' defaultValue='2341720050' style={{ padding: '6px', width: '300px' }} />
        </div>
        <button type='submit' style={{ padding: '8px 16px', backgroundColor: '#2E7D32', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
          Simpan
        </button>
      </form>
      <br />
      <Link href='/profile'>← Kembali ke Profile</Link>
    </div>
  );
};

export default EditProfilePage;
