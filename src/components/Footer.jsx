import React from "react";
import tw from "twin.macro";

const Footer = () => {
  const FooterComp = tw.div`bg-gray-300 p-4`;
  const Title = tw.h2`
    font-sans
    text-sm
  `;
  return (
    <FooterComp>
      <Title>2020 Scrobbly copyrights.</Title>
    </FooterComp>
  );
};

export default Footer;
