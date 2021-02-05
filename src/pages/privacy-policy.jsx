/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import Obfuscate from "react-obfuscate";

import LayoutPage from "../layouts/LayoutPage";
import SEO from "../components/Seo";

const PrivacyPolicy = () => {
  return (
    <LayoutPage>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for the Scrobbly iOS mobile application."
      />
      <h1>Privacy Policy</h1>
      <section>
        <p>
          Antonin Nhek built the Scrobbly app as a Free app. This SERVICE is
          provided by Antonin Nhek at no cost and is intended for use as is.
        </p>
        <p>
          This page is used to inform visitors regarding my policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use my Service.
        </p>
        <p>
          If you choose to use my Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that I collect is used for providing and improving the
          Service. I will not use or share your information with anyone except
          as described in this Privacy Policy.
        </p>
        <p>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at Scrobbly unless otherwise
          defined in this Privacy Policy.
        </p>
      </section>
      <section>
        <h2>Information Collection and Use</h2>
        <p>
          For a better experience, while using our Service, I may require you to
          provide us with certain personally identifiable information, including
          but not limited to username. The information that I request will be
          retained on your device and is not collected by me in any way.
        </p>
        <p>
          The app does use third party services that may collect information
          used to identify you.
        </p>
        <p>
          Links to privacy policy of third party service providers used by the
          app :
        </p>
        <ul>
          <li>
            <a
              href="https://www.last.fm/legal/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Last.fm
            </a>
          </li>
          <li>
            <a
              href="https://expo.io/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Expo
            </a>
          </li>
          <li>
            <a
              href="https://www.spotify.com/legal/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Log Data</h2>
        <p>
          I want to inform you that whenever you use my Service, in a case of an
          error in the app I collect data and information (through third party
          products) on your phone called Log Data. This Log Data may include
          information such as your device Internet Protocol (“IP”) address,
          device name, operating system version, the configuration of the app
          when utilizing my Service, the time and date of your use of the
          Service, and other statistics.
        </p>{" "}
      </section>
      <section>
        <h2>Cookies</h2>
        <p>
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device&apos;s
          internal memory.
        </p>{" "}
        <p>
          This Service does not use these “cookies” explicitly. However, the app
          may use third party code and libraries that use “cookies” to collect
          information and improve their services. You have the option to either
          accept or refuse these cookies and know when a cookie is being sent to
          your device. If you choose to refuse our cookies, you may not be able
          to use some portions of this Service.
        </p>{" "}
      </section>
      <section>
        <h2>Service Providers</h2>
        <p>
          I may employ third-party companies and individuals due to the
          following reasons:
        </p>{" "}
        <ul>
          <li>To facilitate our Service;</li>{" "}
          <li>To provide the Service on our behalf;</li>{" "}
          <li>To perform Service-related services; or</li>{" "}
          <li>To assist us in analyzing how our Service is used.</li>
        </ul>{" "}
        <p>
          I want to inform users of this Service that these third parties have
          access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </p>{" "}
      </section>
      <section>
        <h2>Security</h2>
        <p>
          I value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and I cannot
          guarantee its absolute security.
        </p>{" "}
      </section>
      <section>
        <h2>Links to Other Sites</h2>
        <p>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by me. Therefore, I strongly advise
          you to review the Privacy Policy of these websites. I have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>{" "}
      </section>
      <section>
        <h2>Children’s Privacy</h2>
        <p>
          These Services do not address anyone under the age of 13. I do not
          knowingly collect personally identifiable information from children
          under 13. In the case I discover that a child under 13 has provided me
          with personal information, I immediately delete this from our servers.
          If you are a parent or guardian and you are aware that your child has
          provided us with personal information, please contact me so that I
          will be able to do necessary actions.
        </p>
      </section>
      <section>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          I may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. I will
          notify you of any changes by posting the new Privacy Policy on this
          page.
        </p>{" "}
        <p>This policy is effective as of 2021-02-03</p>{" "}
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or suggestions about my Privacy Policy, do
          not hesitate to contact me at{" "}
          <Obfuscate
            email="scrobbly.app@gmail.com"
            headers={{
              subject: "About Scrobbly: ",
            }}
          />
          .
        </p>{" "}
        <p>
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
        </p>
      </section>
    </LayoutPage>
  );
};

export default PrivacyPolicy;