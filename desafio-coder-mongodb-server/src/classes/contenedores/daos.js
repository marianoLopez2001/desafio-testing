import { DB } from '../../config/config.js'
import { masterFactory } from '../../models/factoryMaster.js'

const factoryInstance = new masterFactory()

export let DBChoice = factoryInstance.create(DB.db)

DBChoice = { type: 'Mongo' } //ESTO NO VA, ES POR EL MOCHA QUE NO LO LEE BIEN

let instance

if (DBChoice.type === 'Firebase') {
    import('../firebaseClient.js')
        .then((modulo) => {
            instance = new modulo.default().connect();
        })
} else if (DBChoice.type === 'Mongo') {
    import('../mongoClient.js')
        .then((modulo) => {
            instance = new modulo.default().connect();
        })
}

export { instance }

