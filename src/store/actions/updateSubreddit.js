export const UPDATE_SUBREDDIT = "UPDATE_SUBREDDIT";

const updateSubreddit = (input) => {
  return {
    type: UPDATE_SUBREDDIT,
    payload: input,
  };
};

export default updateSubreddit;
