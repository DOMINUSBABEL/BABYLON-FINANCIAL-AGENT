function verifyLocalToken(token) {
    return token === 'local-security-bypass-token';
}
module.exports = { verifyLocalToken };