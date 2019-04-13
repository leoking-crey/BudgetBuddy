const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
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

   var json = JSON.stringify(req.body)
   fs.writeFile('./expenses.json', json, (err) => {
     if (!err) {
        console.log('done');
     }
   })
})

app.get('/getexpenses', function (req, res) {
  var obj
  var resp
  fs.readFile('./expenses.json', 'utf8', function (err, data) {
    if (err) throw err
    obj = JSON.parse(data)
    resp = JSON.stringify(obj)
    console.log(resp)
  })
  res.send('hello world')
})
app.listen(3001, () => console.log('Server running on port 3001'))
