import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import ErrorMessage from '../ErrorMessage';

import {
  Users,
  renderTileTitle,
  renderTileSubTitle,
  renderActionIcon
} from '../Users';
import { shallow } from 'enzyme';

describe('Users', () => {
  it('has the correct class', () => {
    const wrapper = shallow(<Users data={[]} />);
    expect(wrapper.hasClass('users')).toBeTruthy();
  });

  describe('GridList', () => {
    it('renders a GridList', () => {
      const wrapper = shallow(<Users data={[]} />);
      expect(wrapper.find(GridList).length).toBe(1);
    });
    it('has as many columns as provided by cols prop', () => {
      const cols = 3;
      const wrapper = shallow(<Users cols={cols} data={[]} />);
      expect(wrapper.find(GridList).prop('cols')).toBe(cols);
    });
    it('renders the correct cell height', () => {
      const cellHeight = 180;
      const wrapper = shallow(<Users cellHeight={cellHeight} data={[]} />);
      expect(wrapper.find(GridList).prop('cellHeight')).toBe(cellHeight);
    });

    it('renders the correct amount of GridTiles', () => {
      const data = [1, 2, 3];
      const wrapper = shallow(<Users data={data} />);
      expect(wrapper.find(GridTile).length).toBe(data.length);
    });

    describe('GridTile', () => {
      const data = [
        { email: 'email1', id: 'id1' },
        { email: 'email2', id: 'id2' },
        { email: 'email3', id: 'id3' }
      ];
      const wrapper = shallow(<Users data={data} />);

      it('renders each Tile with the correct props', () => {
        wrapper.find(GridTile).forEach((tile, index) => {
          expect(tile.prop('title')).toEqual(
            renderTileTitle(data[index].email)
          );
          expect(tile.prop('subtitle')).toEqual(
            renderTileSubTitle(data[index].id)
          );
          expect(tile.prop('actionIcon')).toEqual(renderActionIcon());
        });
      });
    });
  });

  describe('when there is an error', () => {
    it('displays error message', () => {
      const error = 'error';
      const wrapper = shallow(<Users error={error} />);
      expect(wrapper.find(ErrorMessage).length).toBe(1);
      expect(wrapper.find(ErrorMessage).prop('text')).toBe(error);
    });
  });
});
