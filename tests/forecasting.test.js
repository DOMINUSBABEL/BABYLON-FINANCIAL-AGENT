const { doubleExponentialSmoothing } = require('../skills/financial-analytics/forecasting');

test('double exponential smoothing correctly forecasts increasing trend', () => {
    const data = [10, 20, 30, 40, 50];
    const result = doubleExponentialSmoothing(data, 0.5, 0.5);
    expect(result.forecasts.length).toBe(5);
    expect(result.forecasts[4]).toBeGreaterThan(result.smoothed[4]);
});