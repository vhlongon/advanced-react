import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Header from '../Header';
import Home from '../Home';
import Resources from '../Resources';
import Signin from '../Signin';
import NotFound from '../NotFound';
import { shallow, render } from 'enzyme';

describe('App', () => {
  it('should always render a Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toBe(1);
  });
  describe('Router', () => {
    it('should render the Router', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('BrowserRouter').length).toBe(1);
    });
    describe('Routes', () => {
      const wrapper = shallow(<App />);
      const routes = Array.from(wrapper.find('Route'));
      it('should render the home route', () => {
        expect(
          routes.find(({ props }) => props.component === Home)
        ).toBeTruthy();
      });
      it('should render the Resources route', () => {
        expect(
          routes.find(({ props }) => props.component === Resources)
        ).toBeTruthy();
      });
      it('should render the Singin route', () => {
        expect(
          routes.find(({ props }) => props.component === Signin)
        ).toBeTruthy();
      });
      it('should render the NotFound route', () => {
        expect(
          routes.find(({ props }) => props.component === NotFound)
        ).toBeTruthy();
      });
    });
  });
});
