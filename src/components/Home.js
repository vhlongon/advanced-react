import React from 'react';

const homeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  width: '100%'
};

const Home = () => {
  return (
    <div style={homeStyle}>
      <svg
        className="logo"
        version="1.1"
        width="330px"
        height="300px"
        viewBox="0 0 184 166"
      >
        <g transform="translate(92 83)">
          <circle fill="#e91e63" r="16" />
          <g fill="none" stroke="#e91e63" strokeWidth="7">
            <ellipse rx="84" ry="32" id="react-elipse" />
            <ellipse rx="84" ry="32" transform="rotate(120)" />
            <ellipse rx="84" ry="32" transform="rotate(60)" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Home;
