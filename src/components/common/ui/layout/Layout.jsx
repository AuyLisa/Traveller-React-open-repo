import Header from '@ui/header/Header';
import Footer from '@ui/footer/Footer';
import './Layout.css';

function Layout({ children }) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');



  return (
    <>
      <Header />
      <main className="layout__main">{children}</main>  
      <Footer />
    </>
  );
}

export default Layout;
