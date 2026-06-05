// Holt's Linear (Double) Exponential Smoothing for Trend-based Forecasting
function doubleExponentialSmoothing(data, alpha, beta) {
    if (data.length < 2) return data;
    let s = [data[0]];
    let b = [data[1] - data[0]];
    let result = [data[0]];
    
    for (let i = 1; i < data.length; i++) {
        let lastS = s[i - 1];
        let lastB = b[i - 1];
        s.push(alpha * data[i] + (1 - alpha) * (lastS + lastB));
        b.push(beta * (s[i] - lastS) + (1 - beta) * lastB);
        result.push(s[i] + b[i]);
    }
    return { smoothed: s, trends: b, forecasts: result };
}
module.exports = { doubleExponentialSmoothing };