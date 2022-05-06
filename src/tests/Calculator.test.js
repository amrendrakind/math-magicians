import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Calculator from '../components/Calculator';

const Container = () => {
  <BrowserRouter>
    <Calculator />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should display the value', () => {
  render(<Calculator />);
  const button = screen.getByText(/5/i);
  fireEvent.click(button);
  const display = document.querySelector('.calInput');
  expect(display.value).toBe('5');
});

it('should show the result of the operation', () => {
  render(<Calculator />);
  const display = document.querySelector('.calInput');
  const numOne = screen.getByText(/5/i);
  const operand = screen.getByText('+');
  const numTwo = screen.getByText(/9/i);
  const equal = screen.getByText('=');
  fireEvent.click(numOne);
  fireEvent.click(operand);
  fireEvent.click(numTwo);
  fireEvent.click(equal);
  expect(display.value).toBe('14');
});
