import { STORY_ADD, STORY_FETCH, STORY_FETCH_FAILED } from "../constants/actionTypes";

const actStoryAdd = (stories) => ({
  type: STORY_ADD,
  stories,
});

const actStoryFetch = (query) => ({
  type: STORY_FETCH,
  query,
});

const actStoryFetchFailed = (error) => ({
  type: STORY_FETCH_FAILED,
  error,
});

export { actStoryAdd, actStoryFetch, actStoryFetchFailed };
