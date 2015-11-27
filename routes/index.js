module.exports = ( function () {

	var express = require( 'express' );
	var router = express.Router();

	router.get( '/', function ( req, res ) {
		return res.render( 'index' );
	});

	router.get( '/data/home', function ( req, res ) {

		var db = req.db.get( 'restaurantes' );
		db.find( {}, { limit: 10 }, function ( err, docs ) {
			console.log( docs );
			return res.send( docs );
		});

	});


	return router;
})();
