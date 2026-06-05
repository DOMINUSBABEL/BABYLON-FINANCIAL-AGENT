const { calculateIVA } = require('../skills/tax-calculation/colombia_taxes');
test('calculates iva correctly', () => {
    expect(calculateIVA(100)).toBe(19);
});