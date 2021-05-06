import updateSubreddit from "./updateSubreddit";

export const FETCH_SUBREDDIT_POSTS = "FETCH_SUBREDDIT_POSTS";

const fetchSubredditPosts = (dispatch) => {
  fetch(`https://www.reddit.com/r/${updateSubreddit.payload}.json`)
    .then((res) => {
      console.log(res.status);
      switch (res.status) {
        case 404:
          alert("ERROR: path not found ");
          break;

        default:
          break;
      }
      res.json();
    })
    .then((res) =>
      dispatch({
        type: FETCH_SUBREDDIT_POSTS,
        payload: res.data.children,
      })
    );
};

export default fetchSubredditPosts;
