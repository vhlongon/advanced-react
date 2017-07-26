import React from 'react';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

export const AvatarImg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const StatusBar = ({ text }) => {
  return (
    <ListItem
      disabled={true}
      style={{ backgroundColor: '#f3f3f3' }}
      leftAvatar={
        <Avatar
          icon={<AvatarImg />}
          color="#ddd"
          backgroundColor="#e0e0e0"
        />
      }
    >
      <div className="status__text">You are: {<i>{text}</i>}</div>
    </ListItem>
  );
};

export default StatusBar;
