import React from "react";
// import { SubredditContainer, Heading3, Hr } from "../styledComponents";
import Styled from "styled-components";

const SubredditContainer = Styled.div`
    width:100%;
    text-align: center;
`;

const SubredditAnchor = Styled.a`
    display:inline-block;
    text-align: center;
    text-decoration: none;
    margin:15px;
    font-size:1rem;
    color: rgb(80,80,80);
    font-weight: 400;
    transition: color .3s ease-out;
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
      <SubredditAnchor
        href={"https://www.reddit.com" + props.post.data.permalink}
        target="_blank"
      >
        {props.post.data.title}
      </SubredditAnchor>
    </SubredditContainer>
  );
}

export default SubredditPost;
