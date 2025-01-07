const jwt = require('jsonwebtoken');

exports.tokenAuth = async (req, res, next) => {
  try {
    if (req.headers.token !== undefined) {
      let token = req.headers.token.replace("Bearer ", "");
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          if (err.name == 'TokenExpiredError') {
            return res.status(401).json({
              message: 'Token has expired',
              status: 'failed',
            });
          }
          return res.status(401).json({
            message: 'Invalid token',
            status: 'failed',
          });
        }
        req.body.userId = decoded.id;
        req.body.email = decoded.email;
        return next();
      });
    } else {
      return res.status(401).json({
        message: 'No token provided',
        status: 'failed',
      });
    }
  } catch (error) {
    console.error('Error in token authentication:', error);
    return res.status(500).json({
      message: 'Internal Server Error',
      status: 'error',
    });
  }
};
