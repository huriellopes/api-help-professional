const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  validaCampo(body, joi) {
    return celebrate({
        [body]: joi.object().keys({
          name: joi.string().required(),
          email: joi.string().required().email(),
          phone: joi.string().required().min(10).max(11),
          profession: joi.string().required(),
          report: joi.string().required(),
        })
    })
  },

  validaParam (params, joi) {
    return celebrate({
      [params]: joi.object().keys({
        id: joi.number().required(),
      })
    })
  }
}