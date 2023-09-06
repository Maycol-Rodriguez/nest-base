import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  PORT: Joi.number().default(3001),
  PORT_DATABASE: Joi.number().default(5432),
  HOST_DATABASE: Joi.required(),
  USER_DATABASE: Joi.required(),
  PASSWORD_DATABASE: Joi.required(),
  NAME_DATABASE: Joi.required(),
});
