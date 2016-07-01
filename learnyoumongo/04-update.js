var mongo = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/"

mongo.connect(url + process.argv[2], function(err, db) {
	if (err) throw err

	var users = db.collection('users')

	users.update({
		username: 'tinatime'
	}, {
		$set: { age: 40 }
	}, (err, data) => {
		if (err) throw err

		db.close()
    })
})

