import { plock, getIsAuthenticated } from '../index';

describe('selectors', () => {
  describe('plock util', () => {
    describe('when prop exists in object', () => {
      it('returns the correct value', () => {
        const prop = 'prop';
        const obj = {
          prop
        };
        expect(plock(obj, prop)).toEqual({prop});
      });
    });
    describe('when prop does not exist in object', () => {
      it('returns undefined', () => {
        const prop = 'prop';
        const obj = {};
        expect(plock(obj, obj)).toEqual({[prop]: undefined});
      });
    });
  });

  describe('getIsAuthenticated', () => {
    describe('when is authenticated', () => {
      it('returns isAuthenticated: true', () => {
        const isAuthenticated = true;
        const state = {
          auth: { isAuthenticated }
        };
        expect(getIsAuthenticated(state)).toEqual({isAuthenticated});
      });
    });
    describe('when is not authenticated', () => {
      it('returns isAuthenticated: false', () => {
        const isAuthenticated = false;
        const state = {
          auth: { isAuthenticated }
        };
        expect(getIsAuthenticated(state)).toEqual({isAuthenticated});
      });
    });
  });
});
