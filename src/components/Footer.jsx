/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Link } from "gatsby";
import Obfuscate from "react-obfuscate";

import tw, { styled } from "twin.macro";
import { TiHeart } from "react-icons/ti";

const StyledFooter = tw.footer`
  py-12
  lg:py-20
  px-6
  bg-gray-100
`;

const NavLink = styled.nav`
  ${tw`mb-4 text-lg text-center text-gray-400 md:text-xl xl:text-2xl`}
  a {
    ${tw`text-primary`}
  }
`;

const StyledLink = styled(Link)`
  ${tw`text-primary`}
  :hover {
    ${tw`underline`}
  }
`;

const StyledFooterText = tw.p`
  font-sans
  text-xs
  sm:text-sm
  text-center
  text-gray-500
  xl:text-base
`;

const Heart = styled(TiHeart)`
  ${tw`inline text-lg align-top`}
`;

const Footer = () => {
  return (
    <StyledFooter>
      <NavLink>
        <StyledLink to="/faq">FAQ</StyledLink> •{" "}
        <StyledLink to="/privacy-policy">Privacy Policy</StyledLink> •{" "}
        <Obfuscate email="scrobbly.app@gmail.com">Contact Us</Obfuscate>
      </NavLink>
      <StyledFooterText>
        Copyright © {new Date().getFullYear()} Scrobbly. Made with <Heart /> by{" "}
        <a href="https://anhek.dev" title="Go to Antonin Nhek website">
          Antonin Nhek
        </a>{" "}
      </StyledFooterText>
      <StyledFooterText>
        Powered by <a href="https://reactjs.org/">React</a>,{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>,{" "}
        <a href="https://tailwindcss.com/">Tailwind CSS</a> and{" "}
        <a href="https://styled-components.com/">Styled Components</a>.
      </StyledFooterText>
    </StyledFooter>
  );
};

export default Footer;
