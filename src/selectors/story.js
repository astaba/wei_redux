const isNotArchived = (archivedIDs) => (story) =>
  archivedIDs.indexOf(story.objectID) === -1;

const getReadableStories = (globalState) =>
  globalState.storyState.filter(isNotArchived(globalState.archiveState));

export { getReadableStories };
