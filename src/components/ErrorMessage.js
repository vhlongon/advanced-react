import React from 'react';

const style = {
  fontSize: '16px',
  lineHeight: '24px',
  width: 'calc(256px - 1em)',
  height: 'calc(48px - 1em)',
  margin: '.5em',
  display: 'inline-block',
  position: 'relative',
  backgroundColor: '#f6e0e1',
  color: '#905350',
  fontFamily: 'Roboto, sans-serif',
  padding: '.5em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const ErrorMessage = ({ text }) => (
  <div className="error-message" style={style}>
    <span>{text}</span>
  </div>
);

export default ErrorMessage;
