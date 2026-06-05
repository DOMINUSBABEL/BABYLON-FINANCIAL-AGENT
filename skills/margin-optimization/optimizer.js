// SOTA margin optimization based on client size
function calculateOptimalMargin(workersCount) {
    if (workersCount < 10) return 50; // High margin for micro pymes
    if (workersCount < 30) return 40; // Mid margin
    return 30; // Competitive margin
}
module.exports = { calculateOptimalMargin };