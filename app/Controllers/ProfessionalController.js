const ProfessionalModel = require('../Models/ProfessionalModel')

module.exports = {
  /**
   * Método de listagem dos profissionais!
   * @param {*} req 
   * @param {*} res 
   */
  async index (req, res) {
    const [count] = await ProfessionalModel.countProfessional()
    const total = count['count(*)'] || count['count']

    const professional = await ProfessionalModel.index(req.query)

    if (professional.length === 0) res.status(404).json({ 'message': 'Nenhum profissional encontrado!' })
      
    res.header('X-Total-Count', total)

    return res.status(200).json(professional)
  },

  /**
   * Método de Criação dos profissionais!
   * @param {*} req 
   * @param {*} res 
   */
  async create(req, res) {
    await ProfessionalModel.create(req.body)

    return res.status(201).json({ 'message': 'Seu relato foi cadastrado com sucesso! Boa Sorte!' })
  },

  /**
   * Método de Visualização dos profissionais!
   * @param {*} req 
   * @param {*} res 
   */
  async show (req, res) {
    const profissional = await ProfessionalModel.show(req.params.id)

    if (!profissional) res.status(404).json({ 'message': 'Nenhum dado do profissional foi encontrado!' })

    return res.status(200).json(profissional)
  }
}