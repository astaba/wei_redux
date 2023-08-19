import React from "react";
import { useSelector } from "react-redux";

import "./Stories.css";
import Story from "./Story";
import StoriesHeader from "./StoriesHeader";
import { getReadableStories } from "../selectors/story";

const COLUMNS = {
  title: {
    label: "Title",
    width: "40%",
  },
  author: {
    label: "Author",
    width: "30%",
  },
  comments: {
    label: "Comments",
    width: "10%",
  },
  points: {
    label: "Points",
    width: "10%",
  },
  archive: {
    width: "10%",
  },
};

const Stories = () => {
  const { isLoading, stories, isError } = useSelector((state) => ({
    isLoading: state.storyState.isLoading,
    stories: getReadableStories(state),
    isError: state.storyState.isError,
  }));
  
  return (
    <div className="stories">
      <StoriesHeader columns={COLUMNS} />
      {isLoading ? <h3 className="centertxt">Loading ...</h3> : null}
      {isError ? <h4 className="centertxt">{isError}</h4> : null}
      {(stories || []).map((story) => (
        <Story key={story.objectID} story={story} columns={COLUMNS} />
      ))}
    </div>
  );
};

export default Stories;
