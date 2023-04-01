import { instance } from './daos.js';
import ErrorClass from '../errorClass.js';
import { log } from '../../config/config.js';

let instanciaSingleton = null

export default class DaoContainerFirebase {

    constructor(model) {
        this.connection = instance; //ya conectado
        this.model = model;
    }

    //Singleton

    static getInstance() {
        try {
            if (!instanciaSingleton) {
                instanciaSingleton = new DaoContainerFirebase();
            }
            return instanciaSingleton;
        } catch (error) {
            console.log(error);
        }
    }

    //Metodos Crud

    async create(data, id) {
        try {
            await this.connection.collection('users').doc(id).set(data);
            console.log('creado');
        } catch (error) {
            console.log(error)
        }
    }

    async readAll() {
        const snapshot = await this.connection.collection('users').get();
        const data = snapshot.docs.map(doc => doc.data());
        return data;
    }

    async readById(id) {
        try {
            const snapshot = await this.connection.collection('users').get(id);
            const data = snapshot.docs.find(doc => doc.id === id);
            if (!data) {
                throw new ErrorClass(500, 'No hubo coincidencias')
            }
            log.info(JSON.stringify(data.data()));
            return JSON.stringify(data.data())
        } catch (error) {
            throw new ErrorClass(500, error)
        }
    }

    async update(id, data) {
        try {
            const ref = await this.connection.collection('users').doc(id);
            await ref.update(data)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById(id) {
        try {
            await this.connection.collection('users').doc(id).delete()
            console.log("eliminado");
        } catch (error) {
            console.log(error)
        }
    }
}

//aca hay un error, faltaria un await o algo asi para que no haya un timeout
// setTimeout(() => {
//     try {
//         const main = DaoContainerFirebase.getInstance()
//         main.readById('id1234asddasddsfsfds23456')
//     } catch (error) {
//         console.log(error);
//     }
// }, 1000);

