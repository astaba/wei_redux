import { call, put } from "redux-saga/effects";

import { actStoryAdd } from "../actions/story";
import { fetchStories } from "../api/story";

// worker sagas
function* handleStoryFetch(action) {
  const { query } = action;
  const data = yield call(fetchStories, query);
  yield put(actStoryAdd(data.hits));
}

export default handleStoryFetch;
