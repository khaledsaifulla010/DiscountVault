import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import AllBrands from "../components/AllBrands/AllBrands";
import Home from "../components/Home/Home";
import CouponPage from "../components/CouponPage/CouponPage";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/brands",
        element: <AllBrands></AllBrands>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/brand/:id",
        element: <CouponPage></CouponPage>,

        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const newData = data.find((brand) => brand.id === params.id);
          return newData;
        },
      },
    ],
  },
]);

export default router;
