var db = require('./db'),
    getSlug = require('speakingurl');


exports.create = function(dashboard, callback) {
    // var dashboard = {
    // name: dashboard.Name,
    // slug: getSlug(dashboard.Name)
    // }
    db.insert(dashboard, callback);
}

exports.all = function(cb) {
    console.log('alldb');
    db.find({}).sort({
        updatedAt: -1
    }).exec(cb)
};

exports.getbyId = function(id, cb) {
    console.log('getById');
    db.find({ _id: id }).sort({
        updatedAt: -1
    }).exec(cb)
};


exports.update = function(dashboard, cb) {
    console.log(dashboard.Name);
    db.update({
        _id: dashboard._id
    }, {
        $set: {
            Name: dashboard.Name
        }
    }, cb)
};

exports.delete = function(id, cb) {
    db.remove({
        _id: id
    }, {}, cb)
};