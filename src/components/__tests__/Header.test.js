import React from 'react';
import { Header } from '../Header';
import AuthButton from '../AuthButton';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('should render a <nav>', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('nav').length).toBe(1);
  });
  it('should render a list', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('ul').length).toBe(1);
  });

  describe('Links', () => {
    const wrapper = shallow(<Header />);
    const Links = wrapper.find(Link).map(link => link);
    it('should render a link to home', () => {
      expect(Links[0].prop('to')).toBe('/');
    });
    it('should render a Link to resources', () => {
      expect(Links[1].prop('to')).toBe('/resources');
    });
    it('should render a AuthButton', () => {
      expect(wrapper.find(AuthButton).length).toBe(1);
    });
  });
});
