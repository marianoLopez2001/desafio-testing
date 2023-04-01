import DaoContainerFirebase from '../classes/contenedores/daoFirebase.js'
import DaoContainerMongo from '../classes/contenedores/daoMongo.js'
import { DBChoice } from '../classes/contenedores/daos.js'

let main

if (DBChoice.type === 'Firebase') {
    main = DaoContainerFirebase.getInstance()
} else {
    main = DaoContainerMongo.getInstance()
}

export async function get(req, res) {
    const data = await main.readAll()
    res.json(data)
}

export function post(req, res) {
    let data = req.body || req.params.data
    try {
        // main.create(data, data.id) //con firebase
        main.create(data) //con mongo porque el id se genera solo
    } catch (error) {
        console.log(error)
    }
    res.send('Objeto creado ' + JSON.stringify(data))
}

export async function getById(req, res) {
    let data
    let id = req.params.id
    try {
        data = await main.readById(id)
    } catch (error) {
        console.log(error)
    }
    await res.send(data)
}

export function updateById(req, res) {

    const id = req.params.id
    const data = req.body
    try {
        main.update(id, data)
    } catch (error) {
        res.status(404).send('No se encontro el item')
    }
    res.send('actualizado correctamente')
}

export async function deleteOne(req, res) {

    let id = req.params.id
    try {
        await main.deleteById(id)
        res.send('item eliminado ' + id)
    } catch (error) {
        res.status(404).send('No se encontro el item')
    }
}