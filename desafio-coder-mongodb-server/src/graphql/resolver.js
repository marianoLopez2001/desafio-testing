import DaoContainerMongo from "../classes/contenedores/daoMongo.js";

const DAO = DaoContainerMongo.getInstance();

export async function readAll(){
    return await DAO.readAll();
}

export async function readById(id){
    return await DAO.readById(id.id);
}

export async function create(data){
    const formatedData = {name: data.data.name}
    return await DAO.create(formatedData);
}

export async function update(obj){
    const {id, data} = obj
    const formatedData = {name: data.name}
    return await DAO.update(id, formatedData);
}

export async function deleteById(id){
    return await DAO.deleteById(id.id);
}
