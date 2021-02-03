/* eslint-disable react/jsx-one-expression-per-line */
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";
import { TiHome } from "react-icons/ti";
import Layout from "../layouts/Layout";
import ScrobblyLogo from "../components/ScrobblyLogo";

const PrivacyPolicy = () => {
  const StyledHeader = tw.header`
    max-w-2xl
    mx-auto
    flex
    flex-row
    justify-center
    items-center
    p-6
  `;

  const StyledAppIcon = tw.div`
    w-16
  `;

  const StyledContainer = tw.div`
    bg-white
    max-w-2xl
    mx-auto
    p-6
    md:p-10
    mb-8
    rounded-xl
  `;

  const StyledTitle = tw.h1`
    text-2xl
    mb-4
  `;

  const StyledSectionTitle = tw.h2`
    text-xl
    mb-2
  `;

  const StyledSection = tw.section`
    mb-8
  `;

  const StyledP = tw.p`
    text-gray-700
  `;

  const StyledUl = tw.ul`
    p-4
  `;

  const StyleLi = tw.li`
    list-disc
    text-gray-700
  `;

  const StyledBackHomeButton = styled(Link)`
    ${tw`px-6 py-3 text-white no-underline bg-gray-400 rounded-full`}
    :hover {
      ${tw`bg-primary`}
    }
  `;

  const Heart = styled(TiHome)`
    ${tw`inline mr-2 text-xl align-text-bottom`}
  `;

  const CenteredContainer = tw.div`
    flex justify-center p-3
  `;

  return (
    <Layout>
      <StyledHeader>
        <Link to="/" title="Scrobbly">
          <StyledAppIcon>
            <ScrobblyLogo />
          </StyledAppIcon>
        </Link>
      </StyledHeader>
      <StyledContainer>
        <StyledTitle>Privacy Policy</StyledTitle>
        <StyledSection>
          <StyledP>
            Antonin Nhek built the Scrobbly app as a Free app. This SERVICE is
            provided by Antonin Nhek at no cost and is intended for use as is.
          </StyledP>
          <StyledP>
            This page is used to inform visitors regarding my policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use my Service.
          </StyledP>
          <StyledP>
            If you choose to use my Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that I collect is used for providing and improving the
            Service. I will not use or share your information with anyone except
            as described in this Privacy Policy.
          </StyledP>
          <StyledP>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which is accessible at Scrobbly unless
            otherwise defined in this Privacy Policy.
          </StyledP>
        </StyledSection>
        <StyledSection>
          <StyledSectionTitle>
            Information Collection and Use
          </StyledSectionTitle>
          <StyledP>
            For a better experience, while using our Service, I may require you
            to provide us with certain personally identifiable information,
            including but not limited to username. The information that I
            request will be retained on your device and is not collected by me
            in any way.
          </StyledP>
          <div>
            <StyledP>
              The app does use third party services that may collect information
              used to identify you.
            </StyledP>
            <StyledP>
              Link to privacy policy of third party service providers used by
              the app
            </StyledP>
            <StyledUl>
              <StyleLi>
                <a
                  href="https://www.last.fm/legal/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Last.fm
                </a>
              </StyleLi>
              <StyleLi>
                <a
                  href="https://expo.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Expo
                </a>
              </StyleLi>
              <StyleLi>
                <a
                  href="https://www.spotify.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spotify
                </a>
              </StyleLi>
            </StyledUl>
          </div>
        </StyledSection>
        <StyledSection>
          <StyledSectionTitle>Log Data</StyledSectionTitle>
          <StyledP>
            I want to inform you that whenever you use my Service, in a case of
            an error in the app I collect data and information (through third
            party products) on your phone called Log Data. This Log Data may
            include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing my Service, the time and date of your use of
            the Service, and other statistics.
          </StyledP>{" "}
        </StyledSection>
        <StyledSection>
          <StyledP>
            <StyledSectionTitle>Cookies</StyledSectionTitle>
          </StyledP>{" "}
          <StyledP>
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device&apos;s
            internal memory.
          </StyledP>{" "}
          <StyledP>
            This Service does not use these “cookies” explicitly. However, the
            app may use third party code and libraries that use “cookies” to
            collect information and improve their services. You have the option
            to either accept or refuse these cookies and know when a cookie is
            being sent to your device. If you choose to refuse our cookies, you
            may not be able to use some portions of this Service.
          </StyledP>{" "}
        </StyledSection>
        <StyledSection>
          <StyledSectionTitle>Service Providers</StyledSectionTitle>
          <StyledP>
            I may employ third-party companies and individuals due to the
            following reasons:
          </StyledP>{" "}
          <StyledUl>
            <StyleLi>To facilitate our Service;</StyleLi>{" "}
            <StyleLi>To provide the Service on our behalf;</StyleLi>{" "}
            <StyleLi>To perform Service-related services; or</StyleLi>{" "}
            <StyleLi>
              To assist us in analyzing how our Service is used.
            </StyleLi>
          </StyledUl>{" "}
          <StyledP>
            I want to inform users of this Service that these third parties have
            access to your Personal Information. The reason is to perform the
            tasks assigned to them on our behalf. However, they are obligated
            not to disclose or use the information for any other purpose.
          </StyledP>{" "}
        </StyledSection>
        <StyledSection>
          <StyledP>
            <StyledSectionTitle>Security</StyledSectionTitle>
          </StyledP>{" "}
          <StyledP>
            I value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and I
            cannot guarantee its absolute security.
          </StyledP>{" "}
        </StyledSection>
        <StyledSection>
          <StyledP>
            <StyledSectionTitle>Links to Other Sites</StyledSectionTitle>
          </StyledP>{" "}
          <StyledP>
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by me. Therefore, I strongly advise
            you to review the Privacy Policy of these websites. I have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </StyledP>{" "}
        </StyledSection>
        <StyledSection>
          <StyledSectionTitle>Children’s Privacy</StyledSectionTitle>
          <StyledP>
            These Services do not address anyone under the age of 13. I do not
            knowingly collect personally identifiable information from children
            under 13. In the case I discover that a child under 13 has provided
            me with personal information, I immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact me
            so that I will be able to do necessary actions.
          </StyledP>
        </StyledSection>
        <StyledSection>
          <StyledSectionTitle>
            Changes to This Privacy Policy
          </StyledSectionTitle>
          <StyledP>
            I may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. I will
            notify you of any changes by posting the new Privacy Policy on this
            page.
          </StyledP>{" "}
          <StyledP>This policy is effective as of 2021-02-03</StyledP>{" "}
        </StyledSection>
        <StyledSection>
          <StyledSectionTitle>Contact Us</StyledSectionTitle>
          <StyledP>
            If you have any questions or suggestions about my Privacy Policy, do
            not hesitate to contact me at{" "}
            <a href="mailto:a.nhek@icloud.com">a.nhek@icloud.com</a>.
          </StyledP>{" "}
          <StyledP>
            This privacy policy page was created at{" "}
            <a
              href="https://privacypolicytemplate.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacypolicytemplate.net{" "}
            </a>
            and modified/generated by{" "}
            <a
              href="https://app-privacy-policy-generator.nisrulz.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Privacy Policy Generator
            </a>
          </StyledP>
        </StyledSection>
      </StyledContainer>
      <CenteredContainer>
        <StyledBackHomeButton to="/">
          <Heart />
          Back Home
        </StyledBackHomeButton>
      </CenteredContainer>
    </Layout>
  );
};

export default PrivacyPolicy;
