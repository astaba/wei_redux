import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers: {
    archiveStory(state, action) {
      state.push(action.payload);
    },
  },
});

export default archiveSlice.reducer;
export const archiveActions = archiveSlice.actions;
