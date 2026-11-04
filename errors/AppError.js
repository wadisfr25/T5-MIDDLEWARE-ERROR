class AppError extends Error {
  constructor(pesan, statusCode, kode) {
    super(pesan);
    this.statusCode = statusCode;
    this.kode = kode;
    this.isOperational = true;
  }
}

module.exports = AppError;
