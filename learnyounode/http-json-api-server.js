var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function(req, res) {
	var urlInfo = url.parse(req.url, true)

	res.writeHead(200, { 'Content-Type': 'application/json' })

	var d = new Date(urlInfo.query.iso)

	if (urlInfo.pathname == '/api/parsetime')
		res.end(JSON.stringify({
			hour: d.getHours(),
			minute: d.getMinutes(),
			second: d.getSeconds()
		}))
	else if (urlInfo.pathname == '/api/unixtime')
		res.end(JSON.stringify({ unixtime: d.getTime() }))
})
server.listen(port)