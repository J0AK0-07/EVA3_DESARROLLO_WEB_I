const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const projectRoutes = require('./routes/projects');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

// Swagger setup
const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gestión de Proyectos API',
      version: '1.0.0',
    },
  },
  apis: [path.resolve(__dirname, 'routes', '*.js')],
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/projects', projectRoutes);

// Error handler
app.use((err, req, res, next) => {
  if (err && err.isJoi) {
    return res.status(400).json({ error: err.details.map(d => d.message).join(', ') });
  }
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
