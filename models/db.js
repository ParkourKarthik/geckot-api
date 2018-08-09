Datastore = require('nedb'),
    db = new Datastore({
        filename: 'data/dashboards.db',
        autoload: true, // automatically load the database (no qneed to call loadDatabase)
        timestampData: true // automatically add and manage the fields createdAt and updatedAt
    })
module.exports = db