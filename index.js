const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/expenseSave', (req, res) => {
   console.log("saving data")
   console.log(req.body)
   console.log("housing: ${req.body.housing}")
})
app.listen(3001, () => console.log('Server running on port 3001'))
