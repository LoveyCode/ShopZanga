const express = require('express');
const jwt = require('jsonwebtoken');



const router = express.Router();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const SECRET_KEY = process.env.SECRET_KEY;


// Middleware to check JWT in cookies
const verifyAdminToken = (req, res, next) => {
  const token = req.cookies.adminToken;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Forbidden' });
  }
};

// Admin login route
router.post('/admin/login', (req, res) => {
  const { password } = req.body;

  if (password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
    res
      .cookie('adminToken', token, {
        httpOnly: true,
        secure: false, // set to true on HTTPS/production
        sameSite: 'Lax',
        maxAge: 60 * 60 * 1000, // 1 hour
      })
      .json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid password' });
  }
});

// Admin protected route example
router.get('/admin/protected', verifyAdminToken, (req, res) => {
  res.json({ message: 'Welcome admin!' });
});

module.exports = router;
