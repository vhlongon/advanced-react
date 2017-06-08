import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentsList from '../CommentsList';

describe('App', () => {
  it('shows the correct title', () => {
    const component = shallow(<App title="Advanced React" />);
    expect(component.find('h1').text()).toContain('Advanced React');
  });

  it('renders with the correct class', () => {
    const component = shallow(<App />);
    expect(component.hasClass('App')).toBe(true);
  });

  it('shows a comment box', () => {
    const component = shallow(<App />);
    expect(component.find(CommentBox).length).toBe(1);
  });

  it('shows a comments list', () => {
    const component = shallow(<App />);
    expect(component.find(CommentsList).length).toBe(1);
  });
});
