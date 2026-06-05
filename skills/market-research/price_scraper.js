// SOTA market research search tool
function computeNicheAvg(prices) {
    return prices.reduce((a, b) => a + b, 0) / prices.length;
}
module.exports = { computeNicheAvg };