import React from "react";
// import tw, { styled } from "twin.macro";
import useSiteMetadata from "../hooks/useSiteMetadata";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <>
      <Header siteTitle={title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
