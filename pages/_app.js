import { Provider } from "next-auth/client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
