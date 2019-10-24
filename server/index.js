require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')



const app = express()

app.use(express.json())

//endpoints
app.get('/api/inventory',ctrl.getInventory)
app.get('/api/inventory/:id', ctrl.getProduct)
app.post('/api/inventory', ctrl.create)
app.delete('/api/inventory/:id', ctrl.delete)
app.put('/api/inventory/:id', ctrl.update)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} ducks marching in the street`))

})