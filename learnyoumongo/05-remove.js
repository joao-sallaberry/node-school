var mongo = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/"

mongo.connect(url + process.argv[2], function(err, db) {
	if (err) throw err

	var coll = db.collection(process.argv[3])

	coll.remove({
		_id: process.argv[4]
	}, (err, data) => {
		if (err) throw err

		db.close()
    })
})

