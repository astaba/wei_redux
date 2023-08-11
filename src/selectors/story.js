const isNotArchived = (archivedIDs) => (story) =>
  archivedIDs.indexOf(story.objectID) === -1;

const getReadableStories = (globalState) =>
  globalState.storyState.stories.filter(isNotArchived(globalState.archiveState));

const getStoryFetchError = (globalState) => globalState.storyState.error;

const getFetchLoading = (globalState) => globalState.storyState.loading;

export { getReadableStories, getStoryFetchError, getFetchLoading };
