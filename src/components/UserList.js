import React from 'react';
import User from './User';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';
import { lifecycle, compose } from 'recompose';

const enhance = compose(
  lifecycle({
    componentDidMount() {
      this.props.fetchUsers();
    }
  })
);
export const UserList = ({ users }) => (
  <ul className="userlist">
    {users &&
      users.map(({ name, email, company, id }) => (
        <User key={id} name={name} company={company.name} email={email} />
      ))}
  </ul>
);

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps, { fetchUsers })(enhance(UserList));
