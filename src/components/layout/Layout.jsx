import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>  
      <Footer />
    </>
  );
}

export default Layout;