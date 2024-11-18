
import Banner from "../Header/Banner/Banner";
import BrandsOnSell from "../Main/BrandsOnSell/BrandsOnSell";
import ClientsReview from "../Main/ClientsReview/ClientsReview";
import FAQ from "../Main/FAQ/FAQ";
import TopBrands from "../Main/TopBrands/TopBrands";


const Home = () => {
    return (
      <div className="max-w-[1400px] mx-auto mt-8">

        <header>
            <Banner></Banner>
        </header>

        <main>
          <TopBrands></TopBrands>
          <BrandsOnSell></BrandsOnSell>
          <ClientsReview></ClientsReview>
          <FAQ></FAQ>
        </main>

      
      </div>
    );
};

export default Home;