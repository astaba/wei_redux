import React from "react";

const StoriesHeader = ({ columns }) => {
  return (
    <div className="stories-header">
      {Object.keys(columns).map((keys) => (
        <span style={{ width: columns[keys].width }}>
          {columns[keys].label}
        </span>
      ))}
    </div>
  );
};

export default StoriesHeader;
