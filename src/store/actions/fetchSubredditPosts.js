import updateSubreddit from "./updateSubreddit";

export const FETCH_SUBREDDIT_POSTS = "FETCH_SUBREDDIT_POSTS";

const fetchSubredditPosts = (dispatch) => {
  fetch(`https://www.reddit.com/r/${updateSubreddit.payload}.json`)
    .then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          dispatch({
            type: FETCH_SUBREDDIT_POSTS,
            payload: data.data.children,
          });
        });
      } else {
        alert(`ERROR: ${res.status}`);
        window.location.reload();
      }
    })

    .then((res) => {})
    .catch((err) => {
      alert(`error: ${err}`);
      window.location.reload();
    });
};

export default fetchSubredditPosts;
