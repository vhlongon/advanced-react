import * as utils from '../utils';

class MockStore {
  constructor() {
    this.storage = new Map();
  }
  setItem = (key, value) => this.storage.set(key, value);

  getItem = key => this.storage.get(key) || null;

  removeItem = key => this.storage.delete(key);

  clear = () => this.storage.clear();
}

const mockStore = new MockStore();

describe('localStorage utils', () => {
  beforeEach(function() {
    mockStore.clear();
  });
  describe('getItemFromLocalStorate', () => {
    describe('when the given item exists', () => {
      it('returns its value', () => {
        const item = { key: 'key', value: 'value' };
        mockStore.setItem(item.key, item.value);
        expect(utils.getItemFromLocalStorate(item.key, mockStore)).toEqual(
          item.value
        );
      });
    });
    describe('when the given item does not exist', () => {
      it('returns falsy', () => {
        expect(utils.getItemFromLocalStorate('item', mockStore)).toBeFalsy();
      });
    });
  });
  describe('setItemToLocalStorage', () => {
    it('sets the provided key/value to storage', () => {
      const item = { key: 'key', value: 'value' };
      mockStore.setItem(item.key, item.value);
      utils.setItemToLocalStorage(item.value, item.key, mockStore);
      expect(mockStore.getItem(item.key)).toEqual(item.value);
    });
  });
  describe('removeItemFromLocalStorage', () => {
    it('removes the provided key to storage', () => {
      const item = { key: 'key', value: 'value' };
      mockStore.setItem(item.key, item.value);
      utils.removeItemFromLocalStorage(item.key, mockStore);
      expect(mockStore.getItem(item.key)).toBeFalsy();
    });
  });
});
