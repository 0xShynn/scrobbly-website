import React from "react";
import tw, { styled } from "twin.macro";

const PageContainer = styled.div`
  ${tw`w-1/2 text-xl bg-gray-200`}
  padding: 10px;
`;

const Layout = ({ children }) => <PageContainer>{children}</PageContainer>;

export default Layout;
