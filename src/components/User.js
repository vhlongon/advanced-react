import React from 'react';

const User = ({ name, company, email }) => (
  <li className="user">
    <h4 className="user__name">{name}</h4>
    <p className="user__company">{company}</p>
    <a className="user__email" href={`mailto:${email}`}>Email</a>
  </li>
);

export default User;
