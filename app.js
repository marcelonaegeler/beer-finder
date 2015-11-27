var express = require( 'express' );
var app = express();
var db = require( 'monk' )( 'localhost:27017/restaurantes' );

app.use( express.static( './public' ) );
app.use( '/vendor', express.static( './node_modules' ) );

app.set( 'view engine', 'jade' );
app.set( 'views', './views' );


/*
 * Routes
 * */
app.use( function ( req, res, next ) {

	req.db = db;
	next();

});

app.use( '/', require( './routes/index' ) );


app.listen( 3000 );
