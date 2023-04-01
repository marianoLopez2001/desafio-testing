import { app } from './router/middlewars.js'
import { get, getById, post, deleteOne, updateById } from './router/rutas.funciones.js'
import { PORT } from './config/config.js'

//crud con firebase

app.get('/', get) //bien con mongo
app.get('/:id', getById) //bien con mongo
app.post("/", post) //bien con mongo
app.put("/:id", updateById) //bien con mongo
app.delete("/:id", deleteOne) //bien con mongo

app.listen(PORT, () => {
    console.log('server ok en puerto ' + PORT);
})

