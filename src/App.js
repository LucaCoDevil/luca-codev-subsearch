import React from "react";
import Header from "./components/header/header.js";
import Content from "./components/content/content.js";
import SearchBar from "./components/searchBar/searchBar.js";
import Styled from "styled-components";
import updateSubreddit from "./store/actions/updateSubreddit";
import fetchSubredditPosts from "./store/actions/fetchSubredditPosts";

import { connect } from "react-redux";

const BodyContainer = Styled.div`
  padding-bottom:60px;
  `;

function App(props) {
  return (
    <BodyContainer>
      <Header />
      <SearchBar
        subreddit={props.subreddit}
        setsubreddit={props.fetchSubredditPosts}
        fetchData={props.fetchSubredditPosts}
      />
      {props.subredditPosts.length === 0
        ? console.log("NO SUBREDDITS FOUND")
        : console.log("FOUND SUBREDDITS")}
      <Content data={props.subredditPosts} subreddit={props.subreddit} />
    </BodyContainer>
  );
}

const MapStateToProps = (state) => {
  return {
    subredditPosts: state.subredditPosts,
    subreddit: state.subreddit,
  };
};

const MapDispatchProps = (dispatch) => {
  return {
    fetchSubredditPosts: () => dispatch(fetchSubredditPosts),
    updateSubreddit: () => dispatch(updateSubreddit),
  };
};

export default connect(MapStateToProps, MapDispatchProps)(App);
