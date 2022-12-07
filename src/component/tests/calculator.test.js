import calculate from '../../logic/calculate';

describe('Calulate', () => {
  const obj = {
    total: '5',
    next: '8',
    operation: '+',
  };

  test('AC test', () => {
    expect(calculate(obj, 'AC')).toEqual({
      next: null,
      operation: null,
      total: null,
    });
  });
  test('decimal dot test', () => {
    expect(calculate(obj, '.')).toEqual({
      total: '5',
      next: '8.',
      operation: '+',
    });
  });
  test('+/- symbol test', () => {
    expect(calculate(obj, '+/-')).toEqual({
      total: '5',
      next: '-8',
      operation: '+',
    });
  });
});
