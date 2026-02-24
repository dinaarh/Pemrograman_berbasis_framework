import Navbar from '../navbar';
import Footer from '../Footer';

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1, padding: '20px' }}>
        {children}
      </div>
      <Footer />
    </main>
  );
};


export default AppShell;
