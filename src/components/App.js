import React, { Component } from "react";
import "./App.css";
import CommentBox from "./CommentBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <CommentBox />
      </div>
    );
  }
}

export default App;
