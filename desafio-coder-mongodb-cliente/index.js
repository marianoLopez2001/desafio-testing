const axios = require('axios')

//mongo no requiere campo con id, firebase SI

let id = '6427ee4244cb3e2fa0a29025'

let dataConId = { "name": 'objetocambiado2', "id": "6427eea224defeae76a9e7fa" }

let dataSinId = { "name": 'new' }

// axios.get('http://localhost:8080/').then(res => console.log(res.data)) //bien

// axios.get('http://localhost:8080/' + id).then(res => console.log(res.data)) //bien

// axios.post('http://localhost:8080/', dataSinId).then(res => console.log(res.data)) //bien

// axios.put('http://localhost:8080/' + dataConId.id, dataConId).then(res => console.log(res.data)) //bien

// axios.delete('http://localhost:8080/' + id).then(res => console.log(res.data))
