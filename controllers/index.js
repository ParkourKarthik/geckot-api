var express = require('express'),
    router = express.Router(),
    Dashboard = require('../models/dashboard');

router.use('/dashboards', require('./dashboard'))

router.get('/dashboards', function(req, res) {
    console.log('router.index');
    Dashboard.all(function(err, result) {
        if (err) console.log(err);
        // var obj ={
        // dashboards: result
        // 	//helpers: {
        // 	//	formatCreatedAt:this.createdAt.toLocaleDateString()
        // 	//}
        // }
        res.end(JSON.stringify(result));
    })
})

module.exports = router