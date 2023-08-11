import { STORY_ADD } from "../constants/actionTypes";

const INITIAL_STATE = [];

const storyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORY_ADD:
      return applStoryAdd(state, action);
    default:
      return state;
  }
};

function applStoryAdd(state, action) {
  return action.stories;
}

export default storyReducer;
