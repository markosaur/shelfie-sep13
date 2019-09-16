require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')



const app = express()

app.use(express.json())

//endpoints
app.get('/api/inventory',ctrl.getInventory)
app.post('/api/inventory', ctrl.create)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} ducks marching in the street`))

})