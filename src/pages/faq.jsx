import * as React from "react";
import tw from "twin.macro";
import SEO from "../components/Seo";
import Layout from "../layouts/Layout";

function Faq() {
  const Title = tw.h1`
    text-2xl
  `;
  return (
    <Layout>
      <SEO title="FAQ" />
      <Title>Frequently Asked Questions</Title>
      <p>Lorem</p>
    </Layout>
  );
}

export default Faq;
