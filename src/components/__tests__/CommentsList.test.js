import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { CommentsList } from '../CommentsList';

describe('CommentsList', () => {
  const comments = ['This is a comment', 'This is another comment'];
  it('shows an li for each comment', () => {
    const wrapper = shallow(<CommentsList comments={comments} />);
    expect(wrapper.find('li').length).toBe(comments.length);
  });
  it('shows each comment that is provided', () => {
    const wrapper = shallow(<CommentsList comments={comments} />);
    wrapper
      .find('li')
      .forEach((li, i) => expect(li.text()).toEqual(comments[i]));
  });
});
