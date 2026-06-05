// Local invoice parser skill - guarantees 100% data privacy
function parseInvoiceText(text) {
    const totalRegex = /total\s*:\s*\$?([0-9,.]+)/i;
    const match = text.match(totalRegex);
    return match ? parseFloat(match[1].replace(/,/g, '')) : null;
}
module.exports = { parseInvoiceText };