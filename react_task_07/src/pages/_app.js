import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Header />
        <div className="grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </>
  );
}
