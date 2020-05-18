const ProfessionalModel = require('../Models/ProfessionalModel')

module.exports = {
  async index (_req, res) {
    try {
      const professional = await ProfessionalModel.index()

      if (professional.length === 0) res.status(404).json({ 'message': 'Nenhum profissional encontrado!' })

      return res.status(200).json(professional)
    } catch (err) {
      throw new Error('erro ao listar os profissionais')
    }
  },

  async create(req, res) {
    try {
      await ProfessionalModel.create(req.body)

      return res.status(201).json({ 'message': 'Seu relato foi cadastrado com sucesso! Boa Sorte!' })
    } catch (err) {
      throw new Error('Erro ao cadastrar o profissional')
    }
  },

  async show (req, res) {
    try {
      const profissional = await ProfessionalModel.show(req.params.id)

      if (!profissional) res.status(404).json({ 'message': 'Nenhum dado do profissional foi encontrado!' })

      return res.status(200).json(profissional)
    } catch (err) {
      throw new Error('Erro ao visualizar o profissional')
    }
  }
}