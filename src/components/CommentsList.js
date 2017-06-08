import React from 'react';
import { branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

const hasComments = ({ comments }) => comments;
const List = ({ children }) => (
  <ul style={{ listStyleType: 'none' }} className="comments-list">
    {children}
  </ul>
);
const NoComments = () => <List><li><i>No comments yet</i></li></List>;
const WithComments = ({ comments }) => (
  <List>
    {comments.map((comment, i) => <li key={i}>{comment}</li>)}
  </List>
);

export const CommentsList = branch(hasComments, renderComponent(WithComments))(
  NoComments
);

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentsList);
