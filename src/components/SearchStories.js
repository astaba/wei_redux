import React, { Component } from "react";
import { connect } from "react-redux";

import { Button } from "./Button";
import { actStoryFetch } from "../actions/story";

export class SearchStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const validQuery = this.state.query.trim();
    if (validQuery) {
      this.props.launchGetStories(validQuery);
      this.setState({ query: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  launchGetStories: (query) => dispatch(actStoryFetch(query)),
});
export default connect(null, mapDispatchToProps)(SearchStories);
