import React from 'react';
import PrivateRoute, { renderComponentWithConfig } from '../PrivateRoute';
import { Redirect } from 'react-router-dom';
import { shallow } from 'enzyme';
import Resources from '../Resources';

describe('PrivateRouter', () => {
  
  it('renders a <Route>', () => {
    const wrapper = shallow(<PrivateRoute />);
    expect(wrapper.find('Route').length).toBe(1);
  });

  describe('component to render', () => {
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
    it('renders the component when authenticated', () => {
      const config = {
        Component: MockComponent,
        pathname: '/the-path',
        isAuthenticated: true
      };
      const renderComponent = renderComponentWithConfig(config)(MockComponent);

      expect(renderComponent).toEqual(<MockComponent />);
    });
    it('renders a redirect with the correct path when not authenticated', () => {
      const config = {
        Component: MockComponent,
        pathname: '/the-path',
        isAuthenticated: false,
        message: 'message'
      };
      const renderComponent = renderComponentWithConfig(config)(MockComponent);

      expect(renderComponent).toEqual(MockRedirect(config));
    });
  });
});
