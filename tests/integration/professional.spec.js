const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../config/database/connection')

describe('Professional', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  })

  it('should be able to create a new Professional', async () => {
    const response = await request(app)
      .post('/create')
      .send({ 
        name: 'Huriel Correia Lopes',
        email: 'huriellopes1996@gmail.com',
        phone: '61983038556',
        profession: 'Analista',
        report: 'fazendo teste de integração!'
      })
      
      expect(response.body).toHaveProperty('message')
  })
})