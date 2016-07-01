var net = require('net')

var server = net.createServer(function (socket) {
	var d = new Date();
  	var offset = -(new Date().getTimezoneOffset() * 60 * 1000);
  	var n = new Date(d.getTime() + offset);
	socket.end(
		n.toISOString().
			replace(/T/, ' ').      		// replace T with a space
			replace(/:[0-9][0-9]\..+/, '')	// delete the dot and everything after
			+ '\n'
	)
})  
server.listen(process.argv[2])