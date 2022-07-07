import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Navbar />
      <NextNProgress
        color="#000000"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
