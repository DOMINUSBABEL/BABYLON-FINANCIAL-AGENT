const { calculateOptimalMargin } = require('../skills/margin-optimization/optimizer');
test('micro pyme gets 50% margin', () => {
    expect(calculateOptimalMargin(5)).toBe(50);
});