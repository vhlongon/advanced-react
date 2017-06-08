import React from 'react';
import { withState, withHandlers, compose } from 'recompose';

const enhance = compose(
  withState('comment', 'updateComment', ''),
  withHandlers({
    handleCommentUpdate: ({ updateComment }) => ({ target: { value } }) =>
      updateComment(value),
    handleSubmit: ({ updateComment }) => e => {
      e.preventDefault();
      updateComment('');
    }
  })
);

export const CommentBox = ({ comment, handleCommentUpdate, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="comment-box">
    <textarea value={comment} onChange={handleCommentUpdate} />
    <button>Submit comment</button>
  </form>
);

export default enhance(CommentBox);
