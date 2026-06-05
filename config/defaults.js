// Configuration and Environment variable settings backup layer
const fs = require('fs');
const path = require('path');

const DEFAULT_CONFIG = {
    PORT: 4001,
    DB_PATH: "db/ledger.sqlite",
    LOCAL_TOKEN_SAVINGS_RATIO: 450.0,
    LOG_LEVEL: "info"
};

function loadConfigWithBackup() {
    const envPath = path.join(__dirname, '../.env');
    if (!fs.existsSync(envPath)) {
        console.warn(".env file not found, writing default template...");
        const envContent = Object.entries(DEFAULT_CONFIG)
            .map(([k, v]) => `${k}=${v}`)
            .join('\n');
        fs.writeFileSync(envPath, envContent);
    }
    return DEFAULT_CONFIG;
}
module.exports = { loadConfigWithBackup };