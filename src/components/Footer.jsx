import React, { useEffect } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import plaformCenterLogo from "../assets/icon/logo-platform-center.png";

export const Footer = (props) => {
  return (
    <>
      <FooterDiv>
        <Logo src={plaformCenterLogo} />
        <ContentDiv>© NCSOFT Corporation. All Rights Reserved.</ContentDiv>
      </FooterDiv>
    </>
  );
};

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: NotoSansCJKkr;
  font-size: 12px;
`;

const Logo = styled.img`
  margin-right: 8px;
`;

const ContentDiv = styled.div`
  width: 1080px;
`;
