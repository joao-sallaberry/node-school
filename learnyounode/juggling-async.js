var http = require('http')

var response_cnt = 3
var responses = []

function requestCallback(index) {
	return function(response) {
		response.setEncoding('utf8')

		var my_index = index - 2
		responses[my_index] = ''

		response.on('error', function(error) {
			return console.error(error)
		})
		response.on('data', function(data) {
			responses[my_index] += data
		})
		response.on('end', function() {
			if (!--response_cnt)
				for (var i = 0; i < responses.length; i++)
					console.log(responses[i])
		})
	}
}

for (var i = process.argv.length - 1; i >= 2; i--) {
	http.get(process.argv[i], requestCallback(i))
}