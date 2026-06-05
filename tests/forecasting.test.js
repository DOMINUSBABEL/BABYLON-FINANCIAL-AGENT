const { exponentialSmoothing } = require('../skills/financial-analytics/forecasting');
test('exponential smoothing matches base values', () => {
    const data = [100, 110, 120];
    const smooth = exponentialSmoothing(data, 0.5);
    expect(smooth[0]).toBe(100);
});