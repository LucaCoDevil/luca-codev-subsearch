import React from "react";
// import { HeaderContainer, HeaderHeading } from "../styledComponents";
import Styled from "styled-components";

const HeaderContainer = Styled.div`
    display:flex;
    align-items:center;
    width:100%;
    height:60px;
    background-color: #FF4500;
    margin:0;
    `;

const HeaderHeading = Styled.h2`
    font-weight: 500;
    color:white;
    margin: 0 10px;
    `;

function Header(props) {
  return (
    <HeaderContainer>
      <HeaderHeading>Sub-Search</HeaderHeading>
    </HeaderContainer>
  );
}

export default Header;
