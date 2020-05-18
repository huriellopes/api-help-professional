const express = require('express')
const { Segments, Joi } = require('celebrate')

// Validação de parâmetros
const ValidMiddleware = require('../app/Middleware/validate')

// Professional Controller
const ProfessionalController = require('../app/Controllers/ProfessionalController')

const routes = express.Router()

// Rota de Teste
routes.get('/test', (req, res) => res.send('Api working!'))

// Rotas de Professional
routes.get('/', ProfessionalController.index)
routes.get('/show/:id', ValidMiddleware.validaParam(Segments.PARAMS, Joi), ProfessionalController.show)
routes.post('/create', ValidMiddleware.validaCampo(Segments.BODY, Joi), ProfessionalController.create)

module.exports = routes