// middleware.js
module.exports = (req, res, next) => {
  const host = req.headers.host;

  if (host === 'localhost:3000.com') {
    req.url = `/app-home${req.url}`;
  } else if (host === 'codecollabo.localhost:3000.com') {
    req.url = `/code-collabo${req.url}`;
  }

  next();
};
