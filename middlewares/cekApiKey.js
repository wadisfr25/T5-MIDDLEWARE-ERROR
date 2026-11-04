const AppError = require('../errors/AppError');

const cekApiKey = (req, res, next) => {
  const apiKey = process.env.API_KEY || 'kunci-rahasia-kantin';
  if (req.get('x-api-key') !== apiKey) {
    return next(new AppError('API key tidak valid atau tidak tersedia', 401, 'UNAUTHORIZED'));
  }
  next();
};

module.exports = cekApiKey;
