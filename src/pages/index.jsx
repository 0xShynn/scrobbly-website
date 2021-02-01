import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";

import tw from "twin.macro";
import AppStoreButton from "../components/AppStoreButton";
import SEO from "../components/Seo";
import Layout from "../layouts/Layout";
import ScrobblyLogo from "../components/ScrobblyLogo";

const StyledAppIcon = tw.div`
  w-16
  md:w-20
  mb-12
`;

const StyledContainer = tw.section`
  flex
  flex-wrap
  justify-center
  xl:py-20
`;

const StyledPresentation = tw.div`
  flex
  flex-col
  p-8
  items-center
  justify-center
  max-w-md
  md:pl-12
  md:max-w-lg
  lg:items-start
`;

const StyledImage = tw.div`
  w-96
`;

const StyledAppStoreLogo = tw.div`
  w-36 sm:w-44
`;

const StyledAppName = tw.h1`
  text-xl
  mb-3
`;

const StyledTitle = tw.h2`
  font-bold
  text-2xl
  text-primary
  text-center
  md:text-left
  pb-3
`;

const StyledSubtitle = tw.h3`
    font-sans
    text-base
    mb-6
    text-center
    md:text-left
  `;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "scrobbly-on-iphone.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 690) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <StyledContainer>
        <StyledPresentation>
          <StyledAppIcon>
            <ScrobblyLogo />
          </StyledAppIcon>
          <StyledAppName>Scrobbly</StyledAppName>
          <StyledTitle>
            A clean and elegant iOS mobile app to display your music data
          </StyledTitle>
          <StyledSubtitle>
            Keep track of your favorite artists, songs, albums and scrobbles
            from your Last.fm account.
          </StyledSubtitle>
          <StyledAppStoreLogo>
            <a
              href="https://duckduckgo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppStoreButton
                className="w-lg"
                alt="Antonin Nhek Nenderoid version"
              />
            </a>
          </StyledAppStoreLogo>
        </StyledPresentation>

        <StyledImage>
          <GatsbyImage fluid={data.fileName.childImageSharp.fluid} alt="" />
        </StyledImage>
      </StyledContainer>
    </Layout>
  );
};

export default IndexPage;
