const { convertCurrency } = require('../src/currency');
test('converts usd to cop', () => {
    expect(convertCurrency(10, 'USD', 'COP')).toBe(40000);
});