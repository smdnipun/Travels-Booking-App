const supertest = require('supertest')
const app = require('./server')

describe('User', () => {
  describe('Get User by ID', () => {
    it('Should return 200', async () => {
      const Id = '6358955023633526fa90da4c'
      const response = await supertest(app).get(`/user/${Id}`)
      expect(200).toBe(response.status)
    })
  })
  describe('Get All Users', () => {
    it('Should return 200', async () => {
      const response = await supertest(app).get(`/user/`)
      expect(200).toBe(response.status)
    })
  })
  describe('Add User', () => {
    it('Should return 200', async () => {
      const response = await supertest(app).post('/user/register').send({
        fullname: 'User',
        email: 'test.gmail.com',
        phnNo: '0771234567',
        address: 'No.1, test',
        nic: '23434534',
        password: 'test',
      })
      expect(200).toBe(response.status)
    })
  })
})

describe('Auth', () => {
  describe('Login', () => {
    it('Should return 200', async () => {
      const response = await supertest(app).get(`/user/login`).send({
        email: 'pkekulandera@gmail.com',
        password: '123',
      })
      expect(200).toBe(response.status)
    })
  })
})

describe('Aloocation Inspector', () => {
  describe('Allocate Inspector', () => {
    it('Should return 200', async () => {
      const response = await supertest(app).get(`/allocateInsp/add`).send({
        ID: '6358955023633526fa90da4c',
        route: 'kandy',
        date: '2022-10-02',
      })
      expect(200).toBe(response.status)
    })
  })
  describe('Get allocation by user Id', () => {
    it('Should return 200', async () => {
      const id = '6358955023633526fa90da4c'
      const response = await supertest(app).get(`/user/${id}`)
      expect(200).toBe(response.status)
    })
  })
})

describe('Invalid token', () => {
  describe('Add Invalid token', () => {
    it('Should return 200', async () => {
      const response = await supertest(app).get(`/invalidToken/add`).send({
        ID: '6358955023633526fa90da4c',
        route: 'kandy',
        date: '2022-10-02',
        reason: 'QR not valid',
      })
      expect(200).toBe(response.status)
    })
  })
})
