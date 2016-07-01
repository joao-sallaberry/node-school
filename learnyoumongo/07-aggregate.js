var mongo = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/learnyoumongo"

mongo.connect(url, function(err, db) {
	if (err) throw err
		
	var prices = db.collection('prices')

    var match = { $match: { size: process.argv[2] } }
    var group = { $group: { 
        _id: 'average',
        average: { $avg: '$price' } }
    }

	prices.aggregate([ match, group ]).toArray((err, results) => {
        if (err) throw err

        console.log(Number(results[0].average).toFixed(2))

        db.close()
    })
})