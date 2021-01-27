import React from "react";
import { Link } from "gatsby";
import tw, { styled } from "twin.macro";

const StyledHeader = tw.div`
    bg-gray-900
    flex
    p-4
  `;

const StyledLink = styled(Link)`
  ${tw`p-2 text-white bg-gray-500 rounded-lg`}
`;

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </StyledHeader>
  );
};

export default Header;
