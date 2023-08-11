import { call, put } from "redux-saga/effects";

import { actStoryAdd } from "../actions/story";

const HN_BASE_URL = "http://hn.algolia.com/api/v1/search?query=";
const fetchStories = (query) =>
  fetch(HN_BASE_URL + query).then((response) => response.json());

// worker sagas
function* handleStoryFetch(action) {
  const { query } = action;
  const data = yield call(fetchStories, query);
  yield put(actStoryAdd(data.hits));
}

export default handleStoryFetch;
