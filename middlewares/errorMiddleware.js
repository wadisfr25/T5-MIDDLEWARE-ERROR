const AppError = require('../errors/AppError');

const notFound = (req, res, next) => {
  next(new AppError('Rute tidak ditemukan', 404, 'ROUTE_NOT_FOUND'));
};

// Empat parameter diperlukan agar Express mengenalinya sebagai error middleware.
const errorHandler = (err, req, res, next) => {
  if (!err.isOperational) {
    console.error(err.stack);
    return res.status(500).json({ error: { pesan: 'Terjadi kesalahan pada server', kode: 'INTERNAL_SERVER_ERROR' } });
  }
  res.status(err.statusCode).json({ error: { pesan: err.message, kode: err.kode } });
};

module.exports = { notFound, errorHandler };
