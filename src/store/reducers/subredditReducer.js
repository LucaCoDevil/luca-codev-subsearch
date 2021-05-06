import { UPDATE_SUBREDDIT } from "../actions/updateSubreddit";

const initialState = {
  payload: "trending",
};

const subredditReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_SUBREDDIT:
      return { ...state, payload };

    default:
      return state;
  }
};

export default subredditReducer;
