class DBManager {
    constructor() { this.connected = true; }
    saveQuote(quote) { console.log('Saving quote to DB', quote); return true; }
}
module.exports = DBManager;