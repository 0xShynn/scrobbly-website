import React from "react";
import { Link } from "gatsby";
import tw from "twin.macro";
import ScrobblyLogo from "./ScrobblyLogo";

const StyledHeader = tw.header`
    max-w-2xl
    mx-auto
    flex
    flex-row
    justify-center
    items-center
    p-6
  `;

const StyledAppIcon = tw.div`
    w-16
  `;

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <Link to="/" title={siteTitle}>
        <StyledAppIcon>
          <ScrobblyLogo />
        </StyledAppIcon>
      </Link>
    </StyledHeader>
  );
};

export default Header;
