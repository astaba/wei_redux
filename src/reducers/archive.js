import { STORY_ARCHIVE } from "../constants/actionTypes";

const INITIAL_STATE = [];

const archiveReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORY_ARCHIVE:
      return applyStoryArchive(state, action);
    default:
      return state;
  }
};

function applyStoryArchive(state, action) {
  return [...state, action.id];
}

export default archiveReducer;
