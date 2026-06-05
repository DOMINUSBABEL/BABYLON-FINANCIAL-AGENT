// Improved Invoice Parser with integrity check validations
function parseInvoiceText(text) {
    if (!text || text.trim() === "") {
        throw new Error("Cannot parse empty invoice content");
    }
    
    const totalRegex = /total\s*:\s*\$?([0-9,.]+)/i;
    const match = text.match(totalRegex);
    if (!match) return null;
    
    const amount = parseFloat(match[1].replace(/,/g, ''));
    if (isNaN(amount) || amount <= 0) {
        throw new Error("Invalid total invoice amount: must be positive numeric value");
    }
    return amount;
}
module.exports = { parseInvoiceText };