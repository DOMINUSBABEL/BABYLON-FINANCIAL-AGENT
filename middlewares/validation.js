function validateQuoteInput(req, res, next) {
    if (!req.body.client || !req.body.workers) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }
    next();
}
module.exports = validateQuoteInput;