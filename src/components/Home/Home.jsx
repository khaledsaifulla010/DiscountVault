
import Banner from "../Header/Banner/Banner";
import BrandsOnSell from "../Main/BrandsOnSell/BrandsOnSell";
import ClientsReview from "../Main/ClientsReview/ClientsReview";
import FAQ from "../Main/FAQ/FAQ";
import TopBrands from "../Main/TopBrands/TopBrands";


const Home = () => {
    return (
      <div className="max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1400px] mx-auto mt-8 px-4 sm:px-6 lg:px-8 lg:ml-0 ml-8">
        <header>
          <Banner />
        </header>

        <main>
          <TopBrands />
          <BrandsOnSell />
          <ClientsReview />
          <FAQ />
        </main>
      </div>
    );
};

export default Home;