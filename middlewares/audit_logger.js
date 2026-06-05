// Audit Logger Express Middleware
const fs = require('fs');
const path = require('path');

function auditLogger(req, res, next) {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        const logLine = `${new Date().toISOString()} | ${req.method} ${req.originalUrl} | Status: ${res.statusCode} | Time: ${duration}ms | IP: ${req.ip}\n`;
        fs.appendFile(path.join(__dirname, '../audit.log'), logLine, (err) => {
            if (err) console.error('Audit logger write error:', err);
        });
    });
    next();
}
module.exports = auditLogger;