const { computeNicheAvg } = require('../skills/market-research/price_scraper');
test('computes average price', () => {
    expect(computeNicheAvg([10, 20, 30])).toBe(20);
});