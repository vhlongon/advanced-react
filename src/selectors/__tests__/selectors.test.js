import {
  plock,
  getIsAuthenticated,
  getSigninError,
  getUsersData
} from '../index';

describe('selectors', () => {
  describe('plock util', () => {
    describe('when prop exists in object', () => {
      it('returns the correct value', () => {
        const prop = 'prop';
        const obj = {
          prop
        };
        expect(plock(obj, { name: prop })).toEqual({ prop });
      });
    });
    describe('when prop does not exist in object', () => {
      it('returns undefined', () => {
        const prop = 'prop';
        const obj = {};
        expect(plock(obj, obj)).toEqual({ [prop]: undefined });
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
        expect(getIsAuthenticated(state)).toEqual({ isAuthenticated });
      });
    });
    describe('when is not authenticated', () => {
      it('returns isAuthenticated: false', () => {
        const isAuthenticated = false;
        const state = {
          auth: { isAuthenticated }
        };
        expect(getIsAuthenticated(state)).toEqual({ isAuthenticated });
      });
    });
  });
  describe('getSigninError', () => {
    describe('when is there is no error ', () => {
      it('returns undefined', () => {
        const state = {
          auth: {}
        };
        expect(getSigninError(state)).toEqual({ error: undefined });
      });
    });

    describe('when is there is an error ', () => {
      it('returns the error message', () => {
        const error = 'error';
        const state = {
          auth: { error }
        };
        expect(getSigninError(state)).toEqual({ errorMessage: error });
      });
    });
  });

  describe('getUsersData', () => {
    describe('when there is an error after fetching data', () => {
      it('returns the error and now data', () => {
        const error = 'error';
        const state = {
          users: { payload: [], error, isLoading: false }
        };
        expect(getUsersData(state)).toEqual({
          data: [],
          error,
          isLoading: false
        });
      });
    });
  });
});
