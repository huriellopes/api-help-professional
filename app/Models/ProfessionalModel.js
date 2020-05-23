const connection = require('../../config/database/connection')

module.exports = {
  /**
   * Metódo que faz a busca dos profissionais no banco de dados!
   */
  async index (query) {
    try {
      const { page = 1 } = query

      const professional = await connection('professional')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*')

      return professional
    } catch (err) {
      throw new Error(err)
    }
  },

  async countProfessional () {
    try {
      const count = await connection('professional').count()

      return count
    } catch (err) {
      throw new Error(err)
    }
  },

  /**
   * Método que faz a criação dos profissionais no banco de dados!
   * @param {*} body 
   */
  async create(body) {
    try {
      const { name, email, phone, profession, report } = body

      const newProfessional = await connection('professional')
        .returning('id')
        .insert({
          name,
          email,
          phone,
          profession,
          report
        })

      return newProfessional
    } catch (err) {
      throw new Error(err)
    }
  },

  /**
   * Método que faz a busca do profissional específico!
   * @param {*} id 
   */
  async show (id) {
    try {
      const profissional = await connection('professional')
        .where('id', id)
        .select('*')
        .first()

      return profissional
    } catch (err) {
      throw new Error(err)
    }
  }
}