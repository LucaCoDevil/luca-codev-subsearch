import React from "react";
import Styled from "styled-components";

function Header(props) {
  //styled components

  const Header = Styled.div`
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

  return (
    <Header>
      <HeaderHeading>Sub-Search</HeaderHeading>
    </Header>
  );
}

export default Header;
