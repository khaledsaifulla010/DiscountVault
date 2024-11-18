import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar/Navbar";


const MainLayouts = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-8">
      <header>
        <Navbar></Navbar>
      </header>

      <Outlet></Outlet>


      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayouts;
