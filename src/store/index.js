import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import subreddit from "./reducers/subredditReducer";
import subredditPostReducer from "./reducers/subredditPostReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  subredditPosts: subredditPostReducer,
  subreddit: subreddit,
});

const middleware = [thunk];

const initialState = {
  subredditPosts: [],
};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
