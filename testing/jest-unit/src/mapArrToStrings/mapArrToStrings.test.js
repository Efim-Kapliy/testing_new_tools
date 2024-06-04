const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
  test('Корректное значение', () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
  });
  test('Мешанина', () => {
    expect(mapArrToStrings([1, 2, 3, 4.4, null, undefined, 'fasdf'])).toEqual(['1', '2', '3']);
  });
  test('Пустой массив', () => {
    expect(mapArrToStrings([])).toEqual([]);
  });
  test('Отрицание возвращаемого массива чисел', () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3]);
  });
  test('Отрицание возвращаемого массива лишних строк', () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual(['1', '2', '3', '4']);
  });
});
