import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from '../pages/HomePage';

describe('Homepage', () => {
  test('renders Homepage', () => {
    render(<HomePage />);
    screen.debug();
  });
});
