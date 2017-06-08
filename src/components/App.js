import React, { Component } from 'react';
import './App.css';
import CommentsList from './CommentsList';
import CommentBox from './CommentBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <CommentBox />
        <CommentsList />
      </div>
    );
  }
}

export default App;
