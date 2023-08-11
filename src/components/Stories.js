import React from "react";
import { connect } from "react-redux";

import "./Stories.css";
import Story from "./Story";
import StoriesHeader from "./StoriesHeader";
import {
  getReadableStories,
  getFetchLoading,
  getStoryFetchError,
} from "../selectors/story";

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

const Stories = ({ stories, isLoading, error }) => {
  return (
    <div className="stories">
      <StoriesHeader columns={COLUMNS} />
      {isLoading ? <h3 className="centertxt">Loading ...</h3> : null}
      {error ? <h4 className="centertxt">{error}</h4> : null}
      {(stories || []).map((story) => (
        <Story key={story.objectID} story={story} columns={COLUMNS} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  stories: getReadableStories(state),
  isLoading: getFetchLoading(state),
  error: getStoryFetchError(state),
});

export default connect(mapStateToProps)(Stories);
