import { actStoryAdd } from "./story";

describe("Create action", () => {
  it("create action and carry payload to populate storyState stories array", () => {
    const stories = ["a", "b", "c"];
    const expectedOutput = {
      type: "STORY_ADD",
      stories,
    };
    const testOutput = actStoryAdd(stories);
    expect(testOutput).toEqual(expectedOutput);
  });
});
