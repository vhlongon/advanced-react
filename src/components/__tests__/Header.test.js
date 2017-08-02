import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Header } from '../Header';
import SignInOutButton from '../auth/SignInOutButton';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('renders a AppBar', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(AppBar).length).toBe(1);
  });
  it('renders a list', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('ul').length).toBe(1);
  });

  describe('Links', () => {
    describe('static links', () => {
      const wrapper = shallow(<Header />);
      const Links = wrapper.find(Link).map(link => link);

      it('renders a link to home', () => {
        expect(Links.find(({ node }) => node.props['to'] === '/').length).toBe(
          1
        );
      });
      it('renders a link to resources', () => {
        expect(
          Links.find(({ node }) => node.props['to'] === '/resources').length
        ).toBe(1);
      });

      it('renders a SignInOutButton', () => {
        expect(wrapper.find(SignInOutButton).length).toBe(1);
      });
    });

    describe('when is authenticated', () => {
      it('does not render a link to signup', () => {
        const wrapper = shallow(<Header isAuthenticated={true} />);
        const Links = wrapper.find(Link).map(link => link);
        expect(
          Links.find(({ node }) => node.props['to'] === '/signup')
        ).toBeFalsy();
      });
    });

    describe('when is not authenticated', () => {
      it('does render a link to signup', () => {
        const wrapper = shallow(<Header isAuthenticated={false} />);
        const Links = wrapper.find(Link).map(link => link);
        expect(
          Links.find(({ node }) => node.props['to'] === '/signup').length
        ).toBe(1);
      });
    });
  });
});
