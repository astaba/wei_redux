import { getReadableStories } from "./story";

describe("Select readable stories:", () => {
  it("Sort out readable stories from archived stories", () => {
    const storyState = {
      loading: false,
      stories: [
        { title: "a", objectID: 23 },
        { title: "b", objectID: 54 },
        { title: "c", objectID: 36 },
      ],
      error: null,
    };
    const archiveState = [23, 54];
    const inputState = { storyState, archiveState };
    const expectedReadableStories = [{ title: "c", objectID: 36 }];
    const testState = getReadableStories(inputState);
    expect(testState).toEqual(expectedReadableStories);
  });
});
