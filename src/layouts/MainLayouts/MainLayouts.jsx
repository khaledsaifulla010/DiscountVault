import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner/Banner";
import Navbar from "../../components/Header/Navbar/Navbar";
import BrandsOnSell from "../../components/Main/BrandsOnSell/BrandsOnSell";
import ClientsReview from "../../components/Main/ClientsReview/ClientsReview";
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
        <ClientsReview></ClientsReview>
      </main>

      <footer>{/* <Footer></Footer> */}</footer>
    </div>
  );
};

export default MainLayouts;
