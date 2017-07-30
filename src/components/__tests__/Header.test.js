import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Header } from '../Header';
import AuthButton from '../AuthButton';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('renders a AppBar', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(AppBar).length).toBe(1);
  });
  it('renders a list', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('ul').length).toBe(1);
  });

  describe('Links', () => {
    const wrapper = shallow(<Header />);
    const Links = wrapper.find(Link).map(link => link);
    it('renders a link to home', () => {
      expect(Links.find(({ node }) => node.props['to'] === '/').length).toBe(1);
    });
    it('renders a link to resources', () => {
      expect(
        Links.find(({ node }) => node.props['to'] === '/resources').length
      ).toBe(1);
    });
    it('renders a link to signup', () => {
      expect(
        Links.find(({ node }) => node.props['to'] === '/signup').length
      ).toBe(1);
    });
    it('renders a AuthButton', () => {
      expect(wrapper.find(AuthButton).length).toBe(1);
    });
  });
});
