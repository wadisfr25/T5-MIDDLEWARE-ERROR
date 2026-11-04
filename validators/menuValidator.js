const Joi = require('joi');
const AppError = require('../errors/AppError');

const menuSchema = Joi.object({
  nama: Joi.string().min(3).max(50).required(),
  harga: Joi.number().integer().min(1000).max(100000).required(),
  kategori: Joi.string().valid('makanan', 'minuman', 'camilan').required(),
  tersedia: Joi.boolean().default(true)
});

const validateMenu = (req, res, next) => {
  const { error, value } = menuSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const pesan = error.details.map((detail) => detail.message).join('; ');
    return next(new AppError(pesan, 422, 'VALIDATION_ERROR'));
  }
  req.body = value;
  next();
};

module.exports = { validateMenu };
