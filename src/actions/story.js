import { STORY_ADD, STORY_FETCH } from "../constants/actionTypes";

const actStoryAdd = (stories) => ({
  type: STORY_ADD,
  stories,
});

const actStoryFetch = (query) => ({
  type: STORY_FETCH,
  query,
});

export { actStoryAdd, actStoryFetch };
