/* eslint-disable react/jsx-one-expression-per-line */
import * as React from "react";
import Obfuscate from "react-obfuscate";
import tw from "twin.macro";

import SEO from "../components/Seo";
import LayoutPage from "../layouts/LayoutPage";

function Faq() {
  const StyledSection = tw.section`
    mb-8
  `;

  const StyledHeader = tw.header`
    mb-8
  `;

  const StyledLink = tw.a`text-blue hover:underline`;

  return (
    <LayoutPage>
      <SEO title="FAQ" />
      <StyledHeader>
        <h1>Frequently Asked Questions</h1>
      </StyledHeader>
      <StyledSection>
        <h2>What is Last.fm ?</h2>
        <p>
          <StyledLink
            href="http://last.fm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Last.fm
          </StyledLink>{" "}
          is a music website founded in the United Kingdom in 2002. Using a
          music recommender system called &quot;Audioscrobbler&quot;, Last.fm
          builds a detailed profile of each user&apos;s musical taste by
          recording details of the tracks the user listens to, either from
          Internet radio stations, or the user&apos;s computer or many portable
          music devices. This information is transferred (&quot;scrobbled&quot;)
          to Last.fm&apos;s database either via the music player (including,
          among others Spotify, Deezer, Tidal, MusicBee, and Anghami) or via a
          plug-in installed into the user&apos;s music player. The data are then
          displayed on the user&apos;s profile page and compiled to create
          reference pages for individual artists.
        </p>
        <StyledLink href="https://en.wikipedia.org/wiki/Last.fm">
          Source: Wikipedia
        </StyledLink>
      </StyledSection>
      <StyledSection>
        <h2>What is Scrobbly ?</h2>
        <p>
          Scrobbly is a iOS application based on the Last.fm API. The main goal
          of the app is to fetch your Last.fm music data and display your
          favorite artists, tracks, albums and scrobbles inside a clean and
          simple mobile app.
        </p>
      </StyledSection>
      <StyledSection>
        <h2>How to create an account ? </h2>
        <p>
          In order to work, you need to have a{" "}
          <StyledLink
            href="http://last.fm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Last.fm
          </StyledLink>{" "}
          account. Click{" "}
          <StyledLink
            href="https://www.last.fm/join"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </StyledLink>{" "}
          to be redirected to the Last.fm signup page. Once you have created
          your account, you will be able to use your login details inside the
          Scrobbly app.
        </p>
      </StyledSection>
      <StyledSection>
        <h2>My Last.fm account is created, what&apos;s next ?</h2>
        <p>
          Depending on the platforms or the applications you are using to listen
          music, there are many ways to give Last.fm the ability to scrobble
          automatically your plays. Click{" "}
          <StyledLink
            href="https://www.last.fm/about/trackmymusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </StyledLink>{" "}
          to navigate to the page related to this topic on Last.fm website.
        </p>
      </StyledSection>
      <StyledSection>
        <h2>Does Scrobbly works offline ?</h2>
        <p>The app doesn&apos;t have offline functionnalites at this time.</p>
      </StyledSection>
      <StyledSection>
        <h2>
          Will Scrobbly be able to scrobbles music directly from the app ?
        </h2>
        <p>For the moment, this feature is not planned.</p>
      </StyledSection>
      <StyledSection>
        <h2>Do you have a request or a suggestion ?</h2>
        <p>Feel free to contact me at :</p>
        <Obfuscate
          email="scrobbly.app@gmail.com"
          headers={{
            subject: "About Scrobbly: ",
          }}
        />
      </StyledSection>
    </LayoutPage>
  );
}

export default Faq;
