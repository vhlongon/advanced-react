import React from 'react';
import { withProps, withState, withHandlers, compose } from 'recompose';
import { saveComment } from '../actions';
import { connect } from 'react-redux';

const enhance = compose(
  withState('comment', 'updateComment', ''),
  withProps(({ saveComment }) => saveComment),
  withHandlers({
    handleCommentUpdate: ({ updateComment }) => ({ target: { value } }) =>
      updateComment(value),
    handleSubmit: ({ updateComment, saveComment, comment }) => e => {
      e.preventDefault();
      saveComment(comment);
      updateComment('');
    }
  })
);

export const CommentBox = ({ comment, handleCommentUpdate, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="comment-box">
    <h4>Add a comment</h4>
    <textarea value={comment} onChange={handleCommentUpdate} />
    <button>Submit comment</button>
  </form>
);

export const CommentBoxWithState = enhance(CommentBox);

export default connect(null, { saveComment })(CommentBoxWithState);
