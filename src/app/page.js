import Imagetotext from "./components/Imagetotext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import UserInfo from "./components/UserInfo";


export default function Home() {
  return (
    <>
      <Navbar />
      {/* <UserInfo/> */}
      <Imagetotext />
      <Pricing/>
      <Features/>
      <Footer />
      {/* <UserInfo/> */}
    </>

  );
}
