import DaoContainerMongo from "../classes/contenedores/daoMongo.js";

const DAO = DaoContainerMongo.getInstance();

export async function readAll(){
    return await DAO.readAll();
}

export async function readById(id){
    return await DAO.readById(id.id);
}

export async function create(){
    return await DAO.create();
}

export async function update(){
    return await DAO.update();
}

export async function deleteById(){
    return await DAO.deleteById();
}
