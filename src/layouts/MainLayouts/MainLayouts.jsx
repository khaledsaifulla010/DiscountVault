import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner/Banner";
import Navbar from "../../components/Header/Navbar/Navbar";
import BrandsOnSell from "../../components/Main/BrandsOnSell/BrandsOnSell";
import TopBrands from "../../components/Main/TopBrands/TopBrands";

const MainLayouts = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-8">
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>

      <main>
        <TopBrands></TopBrands>
        <BrandsOnSell></BrandsOnSell>
      </main>

      <footer>{/* <Footer></Footer> */}</footer>
    </div>
  );
};

export default MainLayouts;
