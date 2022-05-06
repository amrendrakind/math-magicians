import React from 'react';
import { render, screen } from '@testing-library/react';

import QuotePage from '../pages/QuotesPage';

describe('QuotePage', () => {
  test('renders QuotePage', () => {
    render(<QuotePage />);
    screen.debug();
  });
});
