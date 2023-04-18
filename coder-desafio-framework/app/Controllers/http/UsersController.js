const User = require('../../Models/User')

class UsersController {

    async readAll({ view }) {
        const db = use('App/Models/User')
        const res = (await db.all()).toJSON() //metodo del orm que retorna todo en la db
        return view.render('dbRenderAll', { res })
    }
    async readById({ id }) {
        // const db = new User()
        const user = await User.find(2) //estaría bueno que venga de req.params
        return user
    }
    async create({ request }) {
        // let x = request._body // ?
        const db = new User()
        db.username = 'mariano3'
        db.password = 'password3'
        await db.save()
        return 'data creada'
    }
    async delete({ id }) {
        const user = await User.findOrFail(1)//estaría bueno que venga de req.params
        await user.delete()
        return 'eliminado'
    }
}


module.exports = UsersController