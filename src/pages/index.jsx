import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";

import tw from "twin.macro";
import AppStoreButton from "../components/AppStoreButton";
import SEO from "../components/Seo";
import Layout from "../layouts/Layout";
import ScrobblyLogo from "../components/ScrobblyLogo";

const StyledContainer = tw.div`
  flex
  flex-wrap
  justify-center
  lg:py-10
  xl:py-40
  bg-white
`;

const StyledPresentation = tw.header`
  flex
  flex-col
  p-8
  items-center
  justify-center
  max-w-md
  md:pl-12
  md:max-w-lg
  lg:items-start
  xl:max-w-2xl
  xl:pr-32
`;

const StyledAppIcon = tw.div`
  w-16
  md:w-20
  mb-12
`;

const StyledAppName = tw.h1`
  text-xl
  mb-3
  text-gray-600
`;

const StyledTitle = tw.h2`
  font-bold
  text-2xl
  text-primary
  text-center
  mb-3
  lg:text-left
`;

const StyledSubtitle = tw.h3`
    font-sans
    text-base
    mb-6
    lg:mb-12
    text-center
    text-gray-600
    lg:text-left
  `;

const StyledAppStoreLogo = tw.div`
  w-40 sm:w-44
`;

const StyledImage = tw.div`
  w-96
  mb-8
  md:mb-0
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      scrobbly_home_screenshot: file(
        relativePath: { eq: "scrobbly-screenshot.jpg" }
      ) {
        childImageSharp {
          fixed {
            src
          }
        }
      }
      iphone_mockup: file(relativePath: { eq: "scrobbly-on-iphone.png" }) {
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
      <SEO
        title="Home"
        keywords={[
          `scrobbly`,
          `lastfm`,
          `ios app`,
          `mobile application`,
          `mobile app`,
          `music application`,
          `music app`,
          `music data`,
        ]}
        image={data.scrobbly_home_screenshot.childImageSharp.fixed.src}
      />
      <StyledContainer>
        <StyledPresentation>
          <Link to="/" title="Scrobbly">
            <StyledAppIcon>
              <ScrobblyLogo />
            </StyledAppIcon>
          </Link>
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
              href="https://www.apple.com/"
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
          <GatsbyImage
            fluid={data.iphone_mockup.childImageSharp.fluid}
            alt=""
          />
        </StyledImage>
      </StyledContainer>
    </Layout>
  );
};

export default IndexPage;
