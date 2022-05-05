import operate from './__mocks__/Operate';

test('sum two values', () => {
  const result = operate(2, 3, '+');
  expect(result).toEqual('5');
});
