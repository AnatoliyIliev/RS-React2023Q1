import chooseColor from '../components/chooseColor';

describe('chooseColor', () => {
  test('returns "red" for value < 5', () => {
    expect(chooseColor(4)).toBe('red');
  });

  test('returns "orange" for 5 <= value < 8', () => {
    expect(chooseColor(5)).toBe('orange');
    expect(chooseColor(7.5)).toBe('orange');
  });

  test('returns "green" for value >= 8', () => {
    expect(chooseColor(8)).toBe('green');
    expect(chooseColor(10)).toBe('green');
  });
});
