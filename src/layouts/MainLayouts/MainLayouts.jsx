import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner/Banner";
import Navbar from "../../components/Header/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-8">
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>

      <main></main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayouts;
