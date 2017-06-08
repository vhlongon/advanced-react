import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CommentBoxWithState, { CommentBox } from '../CommentBox';

describe('CommentBox', () => {
  let component;
  // it is repetead once for each test inside the suit
  beforeEach(() => {
    component = shallow(<CommentBox />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<CommentBox />, div);
  });

  it('has the correct class', () => {
    expect(component.hasClass('comment-box')).toBe(true);
  });

  it('has a text area', () => {
    expect(component.find('textarea').length).toBeGreaterThan(0);
  });

  it('has a button', () => {
    expect(component.find('button').length).toBeGreaterThan(0);
  });

  describe('entering some text', () => {
    const commment = 'New Commment';
    const wrapper = mount(<CommentBoxWithState />);
    const textarea = wrapper.find('textarea');

    it('shows text that is entered', () => {
      textarea.simulate('change', { target: { value: commment } });
      expect(textarea.get(0).value).toEqual(commment);
    });

    it('when submitted clears the input', () => {
      wrapper.simulate('submit');
      expect(textarea.get(0).value).toEqual('');
    });
  });
});
