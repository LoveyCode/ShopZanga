const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/login/auth/success', (req, res) => {
if (!req.user) {
return res.status(401).json({ success: false, message: 'User not authenticated' });
}

const token = jwt.sign(
{ user: { id: req.user._id } },
process.env.JWT_SECRET_WORD,
{ expiresIn: '1h' }
);

res.status(200).json({
success: true,
message: 'Login successful',
user: req.user,
token,
});
});

router.get('/login/auth/failed', (req, res) => {
res.status(401).json({
success: false,
message: 'Login failed',
});
});

// Step 1: Redirect user to Google login
router.get('/google/auth/google', passport.authenticate('google', {
scope: ['profile', 'email']
}));

// Step 2: Handle Google callback and manual redirect
router.get('/google/auth/callback',
passport.authenticate('google', { failureRedirect: '/login/auth/failed' }),
(req, res) => {
const token = jwt.sign(
{ user: { id: req.user._id } },
process.env.JWT_SECRET_WORD,
{ expiresIn: '1h' }
);

res.cookie("auth_token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "Lax", // or "Strict" depending on how you manage redirects
  maxAge: 24 * 60 * 60 * 1000, // 1 day
}); 
res.redirect(`https://zangaa.vercel.app`);
// In production: res.redirect(`https://zangaa.vercel.app/oauth-success?token=${token}`);
})

module.exports = router;