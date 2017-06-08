import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });

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
});
