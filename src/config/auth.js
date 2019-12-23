module.exports = {
  secret: process.env.JWT_SECRET,
  ttl: process.env.JWT_EXPIRED_SECONDS
};
