import { call, put } from "redux-saga/effects";

import { actStoryAdd, actStoryFetchFailed } from "../actions/story";
import { fetchStories } from "../api/story";

// worker sagas
function* handleStoryFetch(action) {
  const { query } = action;
  try {
    const data = yield call(fetchStories, query);
    yield put(actStoryAdd(data.hits));
  }
  catch(error) {
    yield put(actStoryFetchFailed(error))
  }
}

export default handleStoryFetch;
