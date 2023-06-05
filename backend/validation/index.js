let Joi = require("joi");

module.exports = {
  registerSchema: Joi.object({
    url: Joi.string().required().messages({
      "string.empty": `URL cannot be empty`,
      "any.required": `URL is a required field`,
      "string.pattern.base": 'Please enter a valid URL'
    })
  }),
};
