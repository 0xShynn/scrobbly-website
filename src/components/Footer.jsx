import React from "react";
import tw from "twin.macro";

const StyledFooter = tw.div`bg-gray-300 p-4`;

const Title = tw.h2`
    font-sans
    text-sm
  `;

const Footer = () => {
  return (
    <StyledFooter>
      <Title>2020 Scrobbly copyrights.</Title>
    </StyledFooter>
  );
};

export default Footer;
