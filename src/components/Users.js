import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Mail from 'material-ui/svg-icons/communication/contact-mail';
import Person from 'material-ui/svg-icons/social/person';
import ErrorMessage from './ErrorMessage';
import { fetchUsersRequest } from '../actions/fetchUsers';
import { getUsersData } from '../selectors';

const usersStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '600px',
  width: '100%'
};

const gridStyle = {
  display: 'flex',
  margin: '1em auto',
  maxWidth: '800px',
  width: '100%'
};

const tileImgStyle = {
  backgroundImage: 'linear-gradient( 135deg, #e91e63 10%, #FFF6B7 100%)',
  width: '100%',
  height: '100%'
};

const tileBlockStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
};

const tileSpanStyle = { paddingLeft: '.5em' };

export const renderTileTitle = email => (
  <span style={tileBlockStyle}>
    <Mail color="white" style={{ width: '16px' }} />
    <span style={tileSpanStyle}>{email}</span>
  </span>
);

export const renderTileSubTitle = id => (
  <span style={tileBlockStyle}>
    <Person
      style={{ paddingRight: '.5em' }}
      color="white"
      style={{ width: '18px' }}
    />
    <span style={tileSpanStyle}>{id}</span>
  </span>
);

export const renderActionIcon = () => (
  <IconButton><StarBorder color="rgba(233, 30, 99, 0.55)" /></IconButton>
);

export const Users = props => {
  const { data, cols, cellHeight, error } = props;
  return (
    <div className="users" style={usersStyle}>
      {error
        ? <ErrorMessage text={error} />
        : <GridList style={gridStyle} cols={cols} cellHeight={cellHeight}>
            {data &&
              data.map(({ email, id }, index) => (
                <GridTile
                  title={renderTileTitle(email)}
                  subtitle={renderTileSubTitle(id)}
                  key={index}
                  titleBackground="rgba(255,255,255,0.15)"
                  actionIcon={renderActionIcon()}
                >
                  <img style={tileImgStyle} />
                </GridTile>
              ))}
          </GridList>}
    </div>
  );
};

const mapStateToProps = getUsersData;

const enhance = compose(
  connect(mapStateToProps, { fetchUsersRequest }),
  lifecycle({
    componentDidMount() {
      this.props.fetchUsersRequest();
    }
  })
);

Users.defaultProps = {
  cols: 2,
  data: []
};

export default enhance(Users);
