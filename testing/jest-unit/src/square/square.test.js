const square = require('./square.js');

describe('square', () => {
  let mockValue;
  // Перед каждым
  beforeEach(() => {
    // ДОБАВИТЬ В БД
  });
  // Перед началом тестов один раз
  beforeAll(() => {});

  test('Корректное значение', () => {
    // expect(square(5)).toBe(25);
    // expect(square(5)).toBeLessThan(26);
    // expect(square(5)).toBeGreaterThan(24);
    // expect(square(5)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(5);
    expect(spyMathPow).toHaveBeenCalledTimes(1);
  });

  test('Корректное значение', () => {
    // expect(square(5)).toBe(25);
    // expect(square(5)).toBeLessThan(26);
    // expect(square(5)).toBeGreaterThan(24);
    // expect(square(5)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toHaveBeenCalledTimes(0);
  });

  // В конце каждого теста
  afterEach(() => {
    jest.clearAllMocks();
    // УДАЛИТЬ ИЗ БД
  });
  // В конце тестов
  afterAll(() => {});
});
