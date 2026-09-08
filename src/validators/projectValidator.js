const Joi = require('joi');

const createSchema = Joi.object({
  name: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  status: Joi.string().trim().required(),
});

const updateSchema = Joi.object({
  name: Joi.string().trim(),
  description: Joi.string().trim(),
  startDate: Joi.date(),
  endDate: Joi.date(),
  status: Joi.string().trim(),
}).min(1);

module.exports = { createSchema, updateSchema };
