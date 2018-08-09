var express = require('express'),
    router = express.Router(),
    Dashboard = require('../models/dashboard')


router.post('/', function(req, res) {
    var dashboard = req.body;
    Dashboard.create(dashboard, function(err, dashboard) {
        if (err) { res.send(err); }
        // res.redirect('/');
        res.sendStatus(200);
    })
})

//router.post('/:id/failure', function(req, res) {
//  var goal_id = req.params.id
//  Goal.addFailure(goal_id, function(err, goal) {
//    if (err) {res.send(err)}
//    res.sendStatus(200);
//  })
//})

router.put('/', function(req, res) {
    var dashboard = req.body;
    Dashboard.update(dashboard, function(err, dashboard) {
        if (err) { res.send(err) } else res.sendStatus(200);
    })
})


router.get('/id/:id', function(req, res) {
    console.log('router.getByID');
    var dash_id = req.params.id;
    Dashboard.getbyId(dash_id, function(err, dashboard) {
        if (err) { res.send(err) }
        res.send(dashboard);
    })
})

router.delete('/id/:id', function(req, res) {
    var dash_id = req.params.id;
    Dashboard.delete(dash_id, function(err, dashboard) {
        if (err) { res.send(err) }
        res.json({ message: "Successfully deleted" });
    })
})


module.exports = router