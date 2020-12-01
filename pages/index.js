import React, { Component } from "react";
import Error from "next/error";
import StoryList from "../components/StoryList";

class Index extends Component {
  static getInitialProps = async ({ req }) => {
    let stories;
    try {
      const resp = await fetch("https://node-hnapi.herokuapp.com/news?page=1");
      stories = await resp.json();
    } catch (err) {
      console.log(err, "FETCH FAILED");
      stories = [];
    }

    return { stories };
  };

  render() {
    const { stories } = this.props;
    if (stories.length < 1) {
      return <Error statusCode={503} />;
    }
    return (
      <div>
        <h1>Hacker News</h1>
        <StoryList stories={stories} />
      </div>
    );
  }
}

export default Index;
