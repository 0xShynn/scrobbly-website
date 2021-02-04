import * as React from "react";
import { graphql, Link, useStaticQuery, Img } from "gatsby";
import GatsbyImage from "gatsby-image";
import tw from "twin.macro";

import Layout from "../layouts/Layout";
import SEO from "../components/Seo";
import AppStoreButton from "../components/AppStoreButton";
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
  xl:max-w-3xl
  xl:pr-32
`;

const StyledAppIcon = tw.div`
  w-16
  md:w-20
  mb-12
`;

const StyledAppName = tw.h1`
  text-xl
  text-gray-600
  mb-3
  xl:text-2xl
  xl:mb-6
`;

const StyledTitle = tw.h2`
  font-bold
  text-primary
  text-center
  mb-3
  lg:text-left
  lg:text-2xl
  xl:text-3xl
  xl:mb-6
`;

const StyledSubtitle = tw.h3`
  font-sans
  text-base
  mb-6
  text-center
  text-gray-600
  lg:text-left
  lg:mb-10
  xl:text-xl
`;

const StyledAppStoreLogo = tw.div`
  w-40 md:w-44
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
      iphone_mockup: file(relativePath: { eq: "scrobbly-on-iphone.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
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
            alt="Scrobbly app on iPhone"
          />
        </StyledImage>
      </StyledContainer>
    </Layout>
  );
};

export default IndexPage;
