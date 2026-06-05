const rates = { COP: 1, USD: 4000, EUR: 4300 };
function convertCurrency(amount, from, to) {
    const baseAmount = amount * rates[from];
    return baseAmount / rates[to];
}
module.exports = { convertCurrency };