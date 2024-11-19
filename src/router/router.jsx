import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import AllBrands from "../components/AllBrands/AllBrands";
import Home from "../components/Home/Home";
import CouponPage from "../components/CouponPage/CouponPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Authentications/Login/Login";
import Register from "../Authentications/Register/Register";
import ForgetPassword from "../Authentications/ForgetPassword/ForgetPassword";
import MyProfile from "../components/MyProfile/MyProfile";
import UpdateInformation from "../Authentications/UpdateInformation/UpdateInformation";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AboutDev from "../components/AboutDev/AboutDev";

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
        element: (
          <PrivateRoute>
            <CouponPage></CouponPage>
          </PrivateRoute>
        ),

        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const newData = data.find((brand) => brand.id === params.id);
          return newData;
        },
      },
      {
        path: "/aboutDev",
        element: <AboutDev></AboutDev>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetPassword",
        element: (
          <PrivateRoute>
            <ForgetPassword></ForgetPassword>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateInformation",
        element: <UpdateInformation></UpdateInformation>,
      },
    ],
  },
]);

export default router;
