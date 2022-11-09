
import { createBrowserRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Root from "../components/Main/Root";
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
        element: <Services></Services>
      },
      {
        path: "/footer",
        element: <Footer></Footer>
      }
    ],
  },
]);

export default router;