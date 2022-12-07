import operate from '../../logic/operate';

describe('Operation tests', () => {
  test('add 2 + 2 returns 4', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });
  test('multiply 3 by 3 returns 9', () => {
    expect(operate(3, 3, 'x')).toBe('9');
  });
  test('divide 6 by 2 returns 3', () => {
    expect(operate(6, 2, '÷')).toBe('3');
  });
  test('substract 5 from 10 returns 5', () => {
    expect(operate(10, 5, '-')).toBe('5');
  });
  test('9 % 3 returns 0', () => {
    expect(operate(9, 3, '%')).toBe('0');
  });
});
