import React from "react";
import Styled from "styled-components";

//styled components

const SubredditContainer = Styled.div`
padding:0 20px;
`;

const Heading3 = Styled.h4`
    text-align: center;
    color: rgb(60,60,60);
    font-weight: 400;
    `;

function SubredditPost(props) {
  return (
    <SubredditContainer>
      <Heading3>{props.post.data.title}</Heading3>
    </SubredditContainer>
  );
}

export default SubredditPost;
