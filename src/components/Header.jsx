import React from 'react';
import tw from 'twin.macro';

const Header = () => {
  const Header = tw.div`
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
    <Header>
      <Title>Scrobbly</Title>
    </Header>
  );
};

export default Header;
