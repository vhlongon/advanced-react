import React from 'react';
import StatusBar from '../StatusBar';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { shallow } from 'enzyme';

const renderListItemWithThemeProvider = props =>
  shallow(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <StatusBar {...props} />
    </MuiThemeProvider>
  );

describe('StatusBar', () => {
  it('renders a ListItem', () => {
    const wrapper = shallow(<StatusBar />);
    expect(wrapper.find(ListItem).length).toBe(1);
  });

  it('renders an Avatar', () => {
    const wrapper = renderListItemWithThemeProvider();
    expect(wrapper.dive().prop('leftAvatar').props.icon).toBeDefined();
  });

  it('show correct text', () => {
    const text = 'text';
    const wrapper = renderListItemWithThemeProvider({ text });

    wrapper.find(ListItem).children().forEach(node => {
      expect(node.text()).toBe(`You are: ${text}`);
    });
  });
});
