import React from "react";
import tw from "twin.macro";

const Main = () => {
  const MainContainer = tw.div`
    w-full
    p-8

  `;

  const Text = tw.p`
    font-sans
  `;
  return (
    <MainContainer>
      <Text>
        It removes the mapping between components and styles. This means that
        when you`&apos;`re defining your styles, you`&apos;`re actually creating
        a normal React component, that has your styles attached to it.
      </Text>
    </MainContainer>
  );
};

export default Main;
