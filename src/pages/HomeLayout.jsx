import React from "react";
import { Outlet } from "react-router-dom";
import {Footer, Navbar} from "../components";
function HomeLayout() {
  return (
    <>
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
      <Footer/>
    </>
  );
}

export default HomeLayout;
