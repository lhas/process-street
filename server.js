var express = require('express')
var multer  = require('multer')
var cors = require('cors')
var upload = multer({ dest: './uploads/' })

var app = express()

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.post('/', upload.single('avatar'), function (req, res, next) {
  return res.send(req.file.filename);
})

app.listen(3010, function () {
  console.log('Example app listening on port 3010!');
})