import calculate from './__mocks__/Calculate';

test('AC button', () => {
  const object = {
    total: '0',
    next: '0',
    operation: '+',
  };
  const button = 'AC';
  const expected = {
    total: null,
    next: '0',
    operation: null,
  };
  expect(calculate(object, button)).toStrictEqual(expected);
});

test('Number button if there is an operation', () => {
  const object = {
    total: '2',
    next: '0',
    operation: 'x',
  };
  const button = '2';
  const expected = {
    total: '2',
    next: '2',
    operation: 'x',
  };
  expect(calculate(object, button)).toStrictEqual(expected);
});

test('User pressed operation after pressing "="', () => {
  const object = {
    total: '3',
    next: null,
    operation: null,
  };
  const button = 'x';
  const expected = {
    total: '3',
    next: null,
    operation: 'x',
  };
  expect(calculate(object, button)).toStrictEqual(expected);
});

test('User pressed operation when there is an existing operation', () => {
  const object = {
    total: '4',
    next: null,
    operation: 'x',
  };
  const button = '+';
  const expected = {
    total: '4',
    next: null,
    operation: '+',
  };
  expect(calculate(object, button)).toStrictEqual(expected);
});
