
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes');

Object.defineProperty( Object.prototype, "extend", {
    enumerable: false,
    value: function( from ){
        var props = Object.getOwnPropertyNames( from );
        var dest = this;
        props.forEach( function( name ){
            if( name in dest ){
                var destination = Object.getOwnPropertyDescriptor( from, name );
                Object.defineProperty( dest, name, destination );
            }
        } );
        return this;
    }
} );

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');

  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.register( ".html", require( "jqtpl" ).express );
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/newSlide', routes.newSlide);
app.get('/slides', routes.slides);
app.get('/editSlide/:slideId', routes.editSlide);
app.get('/slide/:slideId', routes.showSlide);
app.get('/m/:slideId', routes.mobilePoll);
app.get('/remove/:slideId', routes.removeSlide);
app.post('/insertSlide', routes.insertSlide);
app.post('/updateSlide', routes.updateSlide)

app.listen(3100);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

//socket.io.js
require('./smtp').init(app);