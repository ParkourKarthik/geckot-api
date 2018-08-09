var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

// DB Configuration
//var mongo = require('mongoskin');
//var monk = require('monk');
//var db = mongo.db('mongodb://localhost:27017/Gecko');

//var index = require('./routes/index');
//var users = require('./routes/users');
//var dashboards = require('./controllers/dashboard');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//

// Add headers
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/* var originsWhitelist = [
    'http://localhost:8000',
    'http://localhost:4200',
    'https://geckot.herokuapp.com/' //this is my front-end url for development
];
var corsOptions = {
        origin: function(origin, callback) {
            var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
            callback(null, isWhitelisted);
        },
        credentials: true
    }
    //here is the magic
app.use(cors(corsOptions));
 */
// Serve the db to the router
/* app.use(function(req, res, next) {
    //req.db = db;
    next();
});
 */
//app.use('/', index);
//app.use('/users', users);
//app.use('/dashboards', dashboards);

//using controllers..
app.use(require('./controllers'));

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});

// error handler
//app.use(function(err, req, res, next) {
//    // set locals, only providing error in development
//    res.locals.message = err.message;
//    res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//    // render the error page
//    res.status(err.status || 500);
//    res.render('error');
//});



module.exports = app;