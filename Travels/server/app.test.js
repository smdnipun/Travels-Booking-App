import supertest from 'supertest'
// import app from './server.js'
import { app } from './server.js'

//passing test cases

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
      const response = await supertest(app).get(`/user`)
      expect(200).toBe(response.status)
    })
  })

  describe('Add User', () => {
    it('Should return 200', async () => {
      const response = await supertest(app).post('/user/register').send({
        fullName: 'Aamal',
        email: 'kekulandera@gmail.com',
        phnNo: '123465',
        address: 'kandy',
        nic: '123',
        password: '123',
      })
      expect(200).toBe(response.status)
    })
  })

  describe('Auth', () => {
    describe('Login', () => {
      it('Should return 200', async () => {
        const response = await supertest(app).post(`/user/login`).send({
          email: 'pkekulandera@gmail.com',
          password: '123',
        })
        expect(200).toBe(response.status)
      })
    })
  })

  describe('Add Payment', () => {
    it('Should return 200', async () => {
      const response = await supertest(app).post('/payment/add').send({
        amount: '1500.00',
        cardNo: '2424 2452 4561 4612',
        cvv: '123',
        expireDate: '11/25',
        user_id: '6358955023633526fa90da4c',
      })
      expect(200).toBe(response.status)
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

  //   describe('Invalid token', () => {
  //     it('Should return 200', async () => {
  //       const response = await supertest(app).post('/invalidToken/add').send({
  //         ID: '6358955023633526fa90dadf',
  //         route: 'Colombo',
  //         date: '2022-10-12',
  //         reson: 'qr code expired',
  //       })
  //       expect(200).toBe(response.status)
  //     })
  //   })
  // })

  //Failing test cases
  describe('Allocate inspector Failed', () => {
    it('Should return 200', async () => {
      const response = await supertest(app).post('/allocateInsp/add').send({
        ID: '',
        route: '',
        date: '',
      })
      expect(500).toBe(response.status)
    })
  })

  describe('Add User', () => {
    it('Should return 200', async () => {
      const response = await supertest(app).post('/user/register').send({
        fullName: '',
        email: '',
        phnNo: '',
        address: '',
        nic: '',
        password: '',
      })
      expect(500).toBe(response.status)
    })
  })

  describe('Auth', () => {
    describe('Login', () => {
      it('Should return 200', async () => {
        const response = await supertest(app).post(`/user/login`).send({
          email: 'pkekulandera@gmail.com',
          password: '321',
        })
        expect(500).toBe(response.status)
      })
    })
  })

  describe('Get All Users', () => {
    it('Should return 200', async () => {
      const response = await supertest(app).get(`/user/get`)
      expect(500).toBe(response.status)
    })
  })

  describe('User', () => {
    describe('Get User by ID', () => {
      it('Should return 200', async () => {
        const Id = '6358955023633526fa90da4c'
        const response = await supertest(app).get(`/user/get/${Id}`)
        expect(404).toBe(response.status)
      })
    })
  })

  describe('Add Payment', () => {
    it('Should return 200', async () => {
      const response = await supertest(app).post('/payment/add').send({
        amount: '',
        cardNo: '',
        cvv: '',
        expireDate: '',
        user_id: '',
      })
      expect(500).toBe(response.status)
    })
  })
})