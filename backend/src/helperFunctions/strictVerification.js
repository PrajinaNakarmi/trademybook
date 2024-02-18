var jwt = require('jsonwebtoken');

function strictVerifyToken(req, res, next) {
  const secretAccessKey =  process.env.JWT_SECRET_CODE;
  var token = req.headers['x-access-token'];
  
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
      
  jwt.verify(token, secretAccessKey, function(err, decoded) {
    if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.',err,token });
        
    req.decoded = decoded; 
    next();
  });
}

module.exports = strictVerifyToken;