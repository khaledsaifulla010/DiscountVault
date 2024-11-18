import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import AllBrands from "../components/AllBrands/AllBrands";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/brands",
        element: <AllBrands></AllBrands>,
        loader:()=>fetch('/data.json')
      },
    ],
  },
]);

export default router;
