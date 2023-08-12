import storyReducer from "./story";

describe("Reduce story:", () => {
  it("monitor fetching stories data by updating loading, stories and error substates", () => {
    const fetchedStories = ["a", "b", "c"];
    const action = {
      type: "STORY_ADD",
      stories: fetchedStories,
    };
    const previousState = {
      loading: true,
      stories: [],
      error: null,
    };
    const expectedState = {
      loading: false,
      stories: fetchedStories,
      error: null,
    };
    const testedState = storyReducer(previousState, action);
    expect(testedState).toEqual(expectedState);
  });
});
