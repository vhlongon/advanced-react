import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { CommentBox, CommentBoxWithState } from '../CommentBox';

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
    expect(component.find('textarea').length).toBe(1);
  });

  it('has a button', () => {
    expect(component.find('button').length).toBe(1);
  });

  describe('entering some text', () => {
    const comment = 'New comment';
    const mockSaveComment = jest.fn();
    const wrapper = mount(
      <CommentBoxWithState saveComment={mockSaveComment} />
    );
    const textarea = wrapper.find('textarea');
    const form = wrapper.find('form');

    it('shows text that is entered', () => {
      textarea.simulate('change', { target: { value: comment } });
      expect(textarea.get(0).value).toEqual(comment);
    });

    describe('on submit', () => {
      beforeEach(() => {
        form.simulate('submit');
      });
      it('clears the input', () => {
        expect(textarea.get(0).value).toEqual('');
      });

      it('saves the comment', () => {
        expect(mockSaveComment).toBeCalledWith(comment);
      });
    });
  });
});
