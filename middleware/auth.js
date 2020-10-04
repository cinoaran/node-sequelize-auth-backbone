const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  // Check for token
  if (!token)
    return res.status(401).json({ status: 'No token, authorization denied' });
  try {
    // Bearer Token
    // const tokenBearer = token.split(' ')[1];
    // Verify token
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    // Add user from payload
    req.logged = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = auth;
