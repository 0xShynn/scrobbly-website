/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from "gatsby";
import React from "react";
import tw, { styled } from "twin.macro";
import { TiHeart } from "react-icons/ti";

const StyledFooter = tw.footer`
  py-12
  lg:py-20
  px-6
  bg-gray-100
`;

const StyledFooterText = tw.p`
    font-sans
    text-xs
    sm:text-sm
    text-center
    text-gray-500
  `;

const NavLink = styled.nav`
  ${tw`mb-4 text-lg text-center text-gray-400 sm:text-xl`}
`;

const StyledLink = styled(Link)`
  ${tw`text-primary`}
  :hover {
    ${tw`underline`}
  }
`;

const StyledFooterLink = styled.a`
  ${tw`text-gray-500`}
  :hover {
    ${tw`underline`}
  }
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
        <a href="mailto:a.nhek@icloud.com">Contact Us</a>
      </NavLink>
      <StyledFooterText>
        Copyright © {new Date().getFullYear()} Scrobbly. Made with <Heart /> by{" "}
        <StyledFooterLink
          href="https://anhek.dev"
          title="Go to Antonin Nhek website"
        >
          Antonin Nhek
        </StyledFooterLink>{" "}
      </StyledFooterText>
      <StyledFooterText>
        Powered by{" "}
        <StyledFooterLink href="https://reactjs.org/">React</StyledFooterLink>,{" "}
        <StyledFooterLink href="https://www.gatsbyjs.com/">
          Gatsby
        </StyledFooterLink>
        ,{" "}
        <StyledFooterLink href="https://tailwindcss.com/">
          Tailwind CSS
        </StyledFooterLink>{" "}
        and{" "}
        <StyledFooterLink href="https://styled-components.com/">
          Styled Components
        </StyledFooterLink>
        .
      </StyledFooterText>
    </StyledFooter>
  );
};

export default Footer;
