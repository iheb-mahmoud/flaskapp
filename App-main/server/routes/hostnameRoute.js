// hostnameRoute.js
const express = require('express');
const router = express.Router();

router.get('/hostname', (req, res) => {
  const hostname = req.hostname;
  const message = `This app proceeded by server: ${hostname}`;
  res.json({ message });
});

module.exports = router;
