import { CHANGE_AUTH } from './types';

export default (isLoggedIn) => ({
    type: CHANGE_AUTH,
    payload: isLoggedIn
})