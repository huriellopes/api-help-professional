const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  /**
   * Valida os campos de criação do profissional
   * @param {*} body 
   * @param {*} joi 
   */
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

  /**
   * Valida o parâmetro da url para aceitar apenas números!
   * @param {*} params 
   * @param {*} joi 
   */
  validaParam (params, joi) {
    return celebrate({
      [params]: joi.object().keys({
        id: joi.number().required(),
      })
    })
  },

  validaPage (query, joi) {
    return celebrate({
      [query]: joi.object().keys({
        page: joi.number(),
      })
    })
  }
}