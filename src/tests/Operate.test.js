import operate from './__mocks__/Operate';

test('sum two values', () => {
  const result = operate(2, 3, '+');
  expect(result).toEqual('5');
});
test('substract one value from another', () => {
  const result = operate(5, 2, '-');
  expect(result).toEqual('3');
});

test('multiply two values', () => {
  const result = operate(2, 3, 'x');
  expect(result).toEqual('6');
});
