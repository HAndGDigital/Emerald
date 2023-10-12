import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Error,
  Landing,
  Login,
  Quote,
  Services,
  SingleService,
  ContactUs,
} from "./pages";

//Loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as aboutLoader } from "./pages/About";
import { loader as servicesLoader } from "./pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: "about",
        element: <About />,
        loader: aboutLoader,
      },
      {
        path: "services",
        element: <Services />,
        loader: servicesLoader,
      },
      {
        path: "service/:id",
        element: <SingleService />,
      },
      {
        path: "quote",
        element: <Quote />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
