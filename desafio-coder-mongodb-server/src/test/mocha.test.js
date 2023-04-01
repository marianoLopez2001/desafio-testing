import express from 'express'
import { get, getById, deleteOne, updateById, post } from '../router/rutas.funciones.js'
import request from 'supertest'

describe("Test de integración de tareas", function () {

    const app = express()

    app.get('/', get);
    app.get('/:id', getById)
    app.post("/:data", post)
    app.put("/:id", updateById)
    app.delete("/:id", deleteOne)

    let id = '6427ec6f091ec45aaea97e7d'
    let idInexistente = 'dfgjhbgjdasdasd'
    let data = { "name": "jorge", "lastName": "pancho" }

    it('que / sea formate json y que el codigo http sea 200', () => {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
            });
    })

    it('getById y si se encuentra o no el obj', () => {
        request(app)
            .get(`/${id}`)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
            });
    });

    it('POST valida que la data sea recibida por el codigo y que venga de req.params', () => { //, aunque pueda venir de req.body tmbn (JSON
        request(app)
            .post(`/${data}`)
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
            });
    });

    it('DELETE', () => {
        request(app)
            .delete(`/${id}`)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
            });
    });

    it('delete 404 usuario no existe', () => {
        request(app)
            .delete(`/${idInexistente}`)
            .expect(404)
            .end((err, res) => {
                if (err) throw err;
            });
    });
})

