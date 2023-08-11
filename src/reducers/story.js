import { STORY_FETCH, STORY_ADD, STORY_FETCH_FAILED } from "../constants/actionTypes";

const INITIAL_STATE = {
  loading: false,
  stories: [],
  error: null,
};

const storyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORY_FETCH:
      return applStoryFetch(state, action);
    case STORY_ADD:
      return applStoryAdd(state, action);
    case STORY_FETCH_FAILED:
      return applStoryFetchFailed(state, action);
    default:
      return state;
  }
};

function applStoryFetch(state) {
  return {
    ...state,
    loading: true,
    error: null,
  }
}
function applStoryAdd(state, action) {
  return {
    loading: false,
    stories: action.stories,
    error: null,
  }
}
function applStoryFetchFailed(state, action) {
  return {
    loading: false,
    stories: [],
    error: action.error,
  }
}

export default storyReducer;
