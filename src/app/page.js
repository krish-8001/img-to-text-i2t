import Tti from "./components/Tti";
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
      <Tti />
      <Pricing/>
      <Features/>
      <Footer />
      {/* <UserInfo/> */}
    </>

  );
}
