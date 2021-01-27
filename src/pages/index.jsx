import * as React from "react";
import tw from "twin.macro";
import SEO from "../components/Seo";
import Layout from "../layouts/Layout";

const StyledMain = tw.div`
    w-full
    p-8
    flex
  `;

const Text = tw.p`
    font-sans
  `;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledMain>
        <Text>
          It removes the mapping between components and styles. This means that
          when you&apos;re defining your styles, you&apos;re actually creating a
          normal React component, that has your styles attached to it.
        </Text>
      </StyledMain>
    </Layout>
  );
};

export default IndexPage;
