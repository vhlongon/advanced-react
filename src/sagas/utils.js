export const storageItem = 'reactAuthToken';
const localStore = window.localStorage;

export const getItemFromLocalStorate = (
  key = storageItem,
  store = localStorage
) => store && store.getItem(key);

export const setItemToLocalStorage = (
  value,
  key = storageItem,
  store = localStorage
) => store && store.setItem(key, value);

export const removeItemFromLocalStorage = (
  key = storageItem,
  store = localStorage
) => store && store.getItem(key) && store.removeItem(key);
