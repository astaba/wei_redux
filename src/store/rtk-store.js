import { configureStore } from "@reduxjs/toolkit";

import storyReducer from "../rtk-slice/story";
import archiveReducer from "../rtk-slice/archive";

const store = configureStore({
  reducer: {
    storyState: storyReducer,
    archiveState: archiveReducer,
  },
});

export default store;
