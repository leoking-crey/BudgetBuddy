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
  let rawdata = fs.readFileSync('./expenses.json')
  obj = JSON.parse(rawdata)
  console.log(obj)
  res.json(obj)
})

app.post('/incomeSave', (req, res) => {
   console.log(req.body)

   var json = JSON.stringify(req.body)
   fs.writeFile('./income.json', json, (err) => {
     if (!err) {
        console.log('done');
     }
   })
})

app.get('/getIncome', function (req, res) {
  var obj
  let rawdata = fs.readFileSync('./income.json')
  obj = JSON.parse(rawdata)
  console.log(obj)
  res.json(obj)
})

app.post('/assetSave', (req, res) => {
   console.log("save assets");
   console.log(req.body);

   var json = JSON.stringify(req.body)
   fs.writeFile('./assets.json', json, (err) => {
     if (!err) {
        console.log('done');
     }
   })
})

app.get('/getAssets', function (req, res) {
  var obj
  let rawdata = fs.readFileSync('./assets.json')
  obj = JSON.parse(rawdata)
  console.log(obj)
  res.json(obj)
})

app.post('/liabilitySave', (req, res) => {
   console.log(req.body)

   var json = JSON.stringify(req.body)
   fs.writeFile('./liabilities.json', json, (err) => {
     if (!err) {
        console.log('done');
     }
   })
})

app.get('/getLiabilities', function (req, res) {
  var obj
  let rawdata = fs.readFileSync('./liabilities.json')
  obj = JSON.parse(rawdata)
  console.log(obj)
  res.json(obj)
})

app.listen(3001, () => console.log('Server running on port 3001'))
