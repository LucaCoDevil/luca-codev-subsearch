import React from "react";
// import { ContentContainer, SubredditHeader } from "../styledComponents";
import Post from "../subredditPost/subredditPost.js";
import Styled from "styled-components";

const ContentContainer = Styled.div`
    width: 70%;
    margin:0 auto;
    padding:0 20px;
    height: auto;
    border-radius:30px;
    background-color:#f3f3f3;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 700px) {
            width:85%;
    }
`;

const SubredditHeader = Styled.h3`
    color:rgb(60,60,60);
`;

function Content(props) {
  return (
    <ContentContainer>
      <SubredditHeader>/r/{props.subredditName}</SubredditHeader>
      {props.data != null
        ? props.data.map((post, index) => <Post post={post} key={index} />)
        : alert("Null")}
    </ContentContainer>
  );
}

export default Content;
