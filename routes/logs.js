const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.json({ status: "Geist loop running" }));
module.exports = router;