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
test('divide one value by another', () => {
  const result = operate(20, 4, '÷');
  expect(result).toEqual('5');
});

test('divide one value by another', () => {
  const result = operate(10, 0, '÷');
  expect(result).toEqual("Can't divide by 0.");
});
test('modulo of one value by another', () => {
  const result = operate(10, 4, '%');
  expect(result).toEqual('2');
});

test('modulo of one value by another', () => {
  const result = operate(10, 0, '%');
  expect(result).toEqual("Can't find modulo as can't divide by 0.");
});
