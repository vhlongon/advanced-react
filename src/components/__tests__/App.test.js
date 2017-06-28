import React from 'react';
import { App } from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should render the correct title', () => {
    const wrapper = shallow(<App title="title" />);
    expect(wrapper.find('.app__title').text()).toBe('title');
  });
});
