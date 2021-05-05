import React from "react";
import { ContentContainer, SubredditHeader } from "../styledComponents";
import Post from "../subredditPost/subredditPost.js";

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
