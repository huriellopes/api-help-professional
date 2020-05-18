const connection = require('../../config/database/connection')

module.exports = {
  async index () {
    try {
      const professional = await connection('professional')

      return professional
    } catch (err) {
      throw new Error(err)
    }
  },

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