import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchStories } from "../api/story";

const initialState = {
  isLoading: false,
  stories: [],
  isError: null,
};

const launchGetStory = createAsyncThunk(
  "story/launchGetStory",
  async (query) => {
    const data = await fetchStories(query);
    return data.hits;
  }
);

const storySlice = createSlice({
  name: "story",
  initialState,
  extraReducers(builder) {
    builder.addCase(launchGetStory.pending, (state, action) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(launchGetStory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.stories = action.payload;
      state.isError = null;
    });
    builder.addCase(launchGetStory.rejected, (state, action) => {
      state.isLoading = false;
      state.stories = [];
      state.isError = action.error.message;
    });
  },
});

export default storySlice.reducer;
export { launchGetStory };
