var express = require('express')
var app = express()

var public_folder = process.argv[3]

app.use(require('stylus').middleware(public_folder))
app.use(express.static(public_folder))

app.listen(process.argv[2])