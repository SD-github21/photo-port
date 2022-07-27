import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

const commercial = {
    name: 'Grocery aisle',
    category: 'commercial',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
  };

  afterEach(cleanup);

  describe('PhotoList is rendering', () => {
    it('renders', () => {
        render(<PhotoList/>);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<PhotoList/>)
        expect(asFragment()).toMatchSnapshot();
    });

  })