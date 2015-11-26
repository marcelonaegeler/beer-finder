var express = require( 'express' );
var app = express();

app.use( express.static( './public' ) );
app.use( '/vendor', express.static( './node_modules' ) );

app.set( 'view engine', 'jade' );
app.set( 'views', './views' );

app.use( '/', function ( req, res ) {
	return res.render( 'index' );
});

app.listen( 3000 );