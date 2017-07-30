import React from 'react';
import { Routes } from '../Routes';
import Home from '../Home';
import Resources from '../Resources';
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';
import NotFound from '../NotFound';
import { shallow } from 'enzyme';

describe('App', () => {
  const wrapper = shallow(<Routes />);
  const routes = Array.from(
    wrapper.find('Switch').children(),
    route => route.props
  );

  it('renders a Home route', () => {
    expect(routes.filter(({ component }) => component === Home).length).toBe(1);
  });

  it('renders a Signin route', () => {
    expect(routes.filter(({ component }) => component === Signin).length).toBe(
      1
    );
  });

  it('renders a Signup route', () => {
    expect(routes.filter(({ component }) => component === Signup).length).toBe(
      1
    );
  });

  it('renders a Resources route', () => {
    expect(
      routes.filter(({ component }) => component === Resources).length
    ).toBe(1);
  });

  it('renders a NotFound route', () => {
    expect(
      routes.filter(({ component }) => component === NotFound).length
    ).toBe(1);
  });
});
