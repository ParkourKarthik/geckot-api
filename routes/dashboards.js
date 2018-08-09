var express = require('express');
var router = express.Router();
var q=require('q');

router.get('/dashboardlist', function(req, res, next) {
    var db = req.db;
    var dashboards = db.collection('dashboards');

    dashboards.find({$and:[{Name:{$ne:''}}, {Name:{$ne:null}}]}).toArray(function(err, result) {
    if (err) throw err;
    res.end(JSON.stringify(result));
    });
});


router.post('/adddashboard', function(req, res) {
    var db = req.db;
    //var reqName=req.body.dsName;
    var reqName="Dash3";
    var dashboards = db.collection('dashboards');
    // Mongo db query to get the max value on ID field.
    dashboards.findOne({Name:reqName}, function(err, result) {
        if(err) throw err;
        if(result)
            res.status(400).send(JSON.stringify({Msg:"Already Dashboard name exist!!!", isSaved:false}));
        else{
            insertDashboard(reqName);
            //res.send(JSON.stringify(insertRes));
        }
    });
    
    //dashboards.findOne({ID:2}, function(err, result){
    //  if(err) throw err;
    //  res.end(JSON.stringify(result));
   // });

   function insertDashboard(reqName){
        //var deferred = q.defer();
        dashboards.count(function(err, _count){
                if(err) throw err;//deferred.reject({Msg:err.name + ': ' + err.message, isSaved:false});
         dashboards.insert({
            ID: (_count +1),
            Name: reqName
         }, function(err, result){
            if (err) {
                //If fails, return error
               //deferred.reject({Msg:err.name + ': ' + err.message, isSaved:false});
               res.end(JSON.stringify({Msg: err.name + ': ' + err.message, isSaved: false }));
            } else {
               res.end(JSON.stringify({Msg: 'Inserted Successfully', isSaved: true }));
               //deferred.resolve({Msg: 'Inserted Successfully', isSaved: true});
            }
      });
    });

    //return deferred.promise;
}
});

router.get('/getDashboardById', function(req, res){
var db = req.db;
var ID='595bb1ea98c019081452e8f1';
//var diferred=q.defer();
var dashboards = db.collection('dashboards');
dashboards.findById(ID, function(err, result){
    if(err) 
        res.status(400).end(err);//diferred.reject(err.Name + ': ' +err.message);
    res.end(JSON.stringify(result));
});
//return diferred.promise;
});


module.exports = router;