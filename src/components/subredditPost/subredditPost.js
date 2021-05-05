import React from "react";
// import { SubredditContainer, Heading3, Hr } from "../styledComponents";
import Styled from "styled-components";

const SubredditContainer = Styled.div`
    width:100%;
    text-align: center;
`;

const Heading3 = Styled.h4`
    display:inline-block;
    text-align: center;
    font-size:1rem;
    color: rgb(80,80,80);
    font-weight: 400;
    &:hover{
        cursor: pointer;
        color: #FF4500;
    }
    `;

const Hr = Styled.hr`
width:90%;
color:#ececec;
opacity: 0.2;
`;

function SubredditPost(props) {
  return (
    <SubredditContainer>
      <Hr />
      <Heading3>{props.post.data.title}</Heading3>
    </SubredditContainer>
  );
}

export default SubredditPost;
