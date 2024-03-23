import Imagetotext from "./components/Imagetotext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Pricing from "./components/Pricing";


export default function Home() {
  return (
    <>
      <Navbar />
      <Imagetotext />
      <Pricing/>
      <Features/>
      <Footer />
    </>

  );
}
