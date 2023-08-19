import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "./Button";
import { launchGetStory } from "../rtk-slice/story";

const SearchStories = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validQuery = query.trim();
    if (validQuery) {
      dispatch(launchGetStory(validQuery));
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchStories;
