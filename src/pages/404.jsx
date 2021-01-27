import { Link } from "gatsby";
import * as React from "react";
import SEO from "../components/Seo";
import Layout from "../layouts/Layout";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <h1>Page not found</h1>
    {process.env.NODE_ENV === "development" ? (
      <>
        <br />
        Try creating a page in
        <code>src/pages/</code>
        .
        <br />
      </>
    ) : null}
    <Link to="/">Go home</Link>
  </Layout>
);

export default NotFoundPage;
