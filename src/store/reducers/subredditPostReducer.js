import { FETCH_SUBREDDIT_POSTS } from "../actions/fetchSubredditPosts";

const subredditPostReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_SUBREDDIT_POSTS:
      return payload;

    default:
      return state;
  }
};

export default subredditPostReducer;
