
import { createBrowserRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Root from "../components/Main/Root";
import Register from "../components/Register/Register";
import Services from "../components/Services/Services";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },

      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);

export default router;