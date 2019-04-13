const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.post('/expenseSave', (req, res) => {
   console.log("saving data")
})

app.get('/', (req, res) => {
  res.send('HEY!')
})
app.listen(3001, () => console.log('Server running on port 3001'))
