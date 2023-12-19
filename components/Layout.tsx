import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css"; // Importe os estilos do Bootstrap
import Navbar from '../components/Navbar'

const Layout = ({ children, title = "teste" }) => (
  <div className="vh-100">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <footer className="bg-light fixed-button">
      <hr />
      <span>Footer</span>
    </footer>
  </div>
);

export default Layout;
