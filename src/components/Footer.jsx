import React from 'react';
import tw from 'twin.macro';

const Footer = () => {
  const Footer = tw.div`bg-gray-300 p-4`;
  const Title = tw.h2`
    font-sans
    text-sm
  `;
  return (
    <Footer>
      <Title>2020 Scrobbly copyrights.</Title>
    </Footer>
  );
};

export default Footer;
