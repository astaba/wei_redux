import { takeEvery, all } from "redux-saga/effects";

import { STORY_FETCH } from "../constants/actionTypes";
import handleStoryFetch from "./story";

// watcher saga
function* watchStoryFetch() {
  yield takeEvery(STORY_FETCH, handleStoryFetch);
}

// root saga
function* watchAll() {
  yield all([watchStoryFetch()]);
}

export default watchAll;
