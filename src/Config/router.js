import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Veiw/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Products from "../Veiw/Products";
import About from "../Veiw/About";
import Contact from "../Veiw/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Product",
        element: <Products />,
      },
      {
        path: "/Aboutus",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/",
    element: <Footer />,
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
