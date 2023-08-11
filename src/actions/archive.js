import { STORY_ARCHIVE } from "../constants/actionTypes";

const actStoryArchive = (id) => ({
  type: STORY_ARCHIVE,
  id,
});

export { actStoryArchive };
