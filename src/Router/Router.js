
import { createBrowserRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Root from "../components/Main/Root";
import Register from "../components/Register/Register";
import Services from "../components/Services/Services";
import ErrorPage from '../components/ErrorPage'
import SingleServices from "../components/Services/SingleServices";
import Checkout from "../components/Checkout/Checkout";
import Orders from "../components/Orders/Orders";
import Faq from "../components/Faq/Faq";
import Blog from "../components/Blog/Blog";
import About from "../About/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
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
        loader: () => fetch(`http://localhost:4000/services`),
        element: <Services></Services>,
      },

      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/services/${params.id}`),
        element: <SingleServices></SingleServices>,
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
        path: "/services/:id/checkout",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/services/${params.id}`),
        element: <Checkout></Checkout>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>
      },

      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);

export default router;