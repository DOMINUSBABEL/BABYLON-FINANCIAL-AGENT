// Tax computation skill for Colombian legislation
function calculateIVA(netAmount) {
    return netAmount * 0.19; // 19% standard VAT
}
function calculateReteFuente(netAmount, rate = 0.04) {
    return netAmount * rate; // Source retention
}
module.exports = { calculateIVA, calculateReteFuente };