# Para correr el proyecto es con 1 solo parametro, que sería la eleccion de la db (firebase o mongo):

# Ejemplo1: npm run start-firebase Firebase 
# Ejemplo2: npm run start-mongo Mongo 

# Los parametros de la DB van con primera letra mayuscula (Mongo | Firebase)

# Ejemplo de las querys/mutations con graphql

# Obtener todos los usuarios

query {
  readAll{
      name,
      _id
  }
}

# Obtener usuario por su id

query {
  readById(id: "idEjemplo"){
      name,
      _id
  }
}

# Crear usuario

mutation {
  create(data: {name: "nombreEjemplo"}) {
    code,
    msg
  }
}

# Eliminar usuario por su id

mutation {
  deleteById(id: "idEjemplo") {
    code,
    msg
  }
}

# Actualizar usuario segun su id, y la data a sobreescribir

mutation {
  update(id: "idEjemplo", data: {name:"nombreEjemplo"}) {
    code,
    msg
  }
}