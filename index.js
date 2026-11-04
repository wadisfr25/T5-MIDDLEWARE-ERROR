const express = require('express');
const menuRouter = require('./routes/menuRoutes');
const logger = require('./middlewares/logger');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);
app.use('/menu', menuRouter);
app.use(notFound);
app.use(errorHandler);

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
}

module.exports = app;
