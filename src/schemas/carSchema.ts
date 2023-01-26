import joi from "joi";

export const carSchema = joi.object({
  model: joi.string().required(),
  licensePlate: joi.string().length(7).required(),
  year: joi.number().required(),
  color: joi.string().required()
});

export const updateCarSchema = joi.object({
  model: joi.string(),
  licensePlate: joi.string().length(7),
  year: joi.number(),
  color: joi.string()
});