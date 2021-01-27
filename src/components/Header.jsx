import React from "react";
import tw from "twin.macro";

const Header = () => {
  const HeaderComp = tw.div`
    bg-gray-900
  `;
  const Title = tw.h1`
    text-lg
    text-white
    p-4
    font-sans
    font-bold
  `;
  return (
    <HeaderComp>
      <Title>Scrobbly</Title>
    </HeaderComp>
  );
};

export default Header;
