import React from 'react';
import tw, { styled } from 'twin.macro';

import background from '../../static/fabric_plaid@2x.png';

const PageContainer = styled.div`
  ${tw`
        bg-gray-200 text-xl w-1/2
    `}
  background-image: url(${background});
  padding: 10px;
`;

const Layout = ({ children }) => <PageContainer>{children}</PageContainer>;

export default Layout;
