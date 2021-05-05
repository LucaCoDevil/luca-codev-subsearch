import React from "react";
import { SubredditContainer, Heading3, Hr } from "../styledComponents";

function SubredditPost(props) {
  return (
    <SubredditContainer>
      <Hr />
      <Heading3>{props.post.data.title}</Heading3>
    </SubredditContainer>
  );
}

export default SubredditPost;
