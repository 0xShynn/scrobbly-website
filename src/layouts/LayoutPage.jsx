import React from "react";

import { Link } from "gatsby";
import tw, { styled } from "twin.macro";
import { TiHome } from "react-icons/ti";

import Footer from "../components/Footer";
import Header from "../components/Header";

const StyledContainer = tw.main`
    bg-white
    max-w-2xl
    mx-auto
    p-6
    mb-8
    md:p-10
    sm:rounded-xl
  `;

const CenteredContainer = tw.div`
    flex justify-center p-3
  `;

const StyledBackHomeButton = styled(Link)`
  ${tw`px-6 py-3 text-white no-underline bg-gray-400 rounded-full`}
  :hover {
    ${tw`bg-primary`}
  }
`;

const Heart = styled(TiHome)`
  ${tw`inline mr-2 text-xl align-text-bottom`}
`;

const LayoutPage = ({ children }) => {
  return (
    <>
      <Header />
      <StyledContainer>{children}</StyledContainer>
      <CenteredContainer>
        <StyledBackHomeButton to="/">
          <Heart />
          Back Home
        </StyledBackHomeButton>
      </CenteredContainer>
      <Footer />
    </>
  );
};

export default LayoutPage;
