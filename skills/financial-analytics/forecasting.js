// SOTA exponential smoothing forecasting skill for financial metrics
function exponentialSmoothing(data, alpha) {
    let result = [data[0]];
    for (let i = 1; i < data.length; i++) {
        result.push(alpha * data[i] + (1 - alpha) * result[i - 1]);
    }
    return result;
}
module.exports = { exponentialSmoothing };