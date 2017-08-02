import React from 'react';
import PrivateRoute, { renderComponentWithConfig } from '../PrivateRoute';
import { Redirect } from 'react-router-dom';
import { shallow } from 'enzyme';
import Users from '../Users';

describe('PrivateRouter', () => {
  it('renders a Route', () => {
    const wrapper = shallow(<PrivateRoute />);
    expect(wrapper.find('Route').length).toBe(1);
  });

  describe('when authenticated', () => {
    const MockComponent = () => <div />;
    const MockRedirect = ({ pathname, message, from = undefined } = {}) => (
      <Redirect
        push={false}
        to={{
          pathname: '/the-path',
          state: { from: undefined, message: 'message' }
        }}
      />
    );
    it('renders the given component', () => {
      const config = {
        Component: MockComponent,
        pathname: '/the-path',
        isAuthenticated: true
      };
      const renderComponent = renderComponentWithConfig(config)(MockComponent);

      expect(renderComponent).toEqual(<MockComponent />);
    });
  });

  describe('when not authenticated', () => {
    const MockComponent = () => <div />;
    const message = 'message';
    const config = {
      pathname: '/the-path',
      isAuthenticated: false,
      message
    };
    const MockRedirect = ({ pathname, message, from = undefined } = {}) => (
      <Redirect
        push={false}
        to={{
          pathname: '/the-path',
          state: { from: undefined, message: 'message' }
        }}
      />
    );
    it('redirects to another given path', () => {
      const renderComponent = renderComponentWithConfig(config)(MockComponent);
      expect(renderComponent).toEqual(MockRedirect(config));
    });

    it('passes down the message prop', () => {
      const renderComponent = renderComponentWithConfig(config)(MockComponent);
      expect(renderComponent.props.to.state.message).toBe(message);
    });
  });
});
