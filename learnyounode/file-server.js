var http = require('http')
var fs = require('fs')

var port = process.argv[2]
var fileName = process.argv[3]

var server = http.createServer(function (req, res) {
	var readStream = fs.createReadStream(fileName)

	readStream.on('open', function() {
		readStream.pipe(res)
	})

	readStream.on('error', function(err) {
		console.log(err)
		res.end(err)
	})
})
server.listen(port)