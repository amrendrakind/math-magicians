import React from 'react';
import { render, screen } from '@testing-library/react';

import CalculatorPage from '../pages/CalculatorPage';

describe('Homepage', () => {
  test('renders Homepage', () => {
    render(<CalculatorPage />);
    screen.debug();
  });
});
