import React from 'react';
import UserList from './UserList';

export const App = ({ title }) => {
  return (
    <div className="app">
      <h1 className="app__title">{title}</h1>
      <UserList />
    </div>
  );
};


export default App;
