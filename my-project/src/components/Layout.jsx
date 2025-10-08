import React from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="mt-12">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
