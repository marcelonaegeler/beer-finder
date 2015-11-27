module.exports = ( function () {

	var express = require( 'express' );
	var router = express.Router();

	router.get( '/', function ( req, res ) {
		return res.render( 'index' );
	});

	router.get( '/data/home', function ( req, res ) {

		var db = req.db.get( 'restaurantes' );

		var data = { items: [], filters: { cuisine: [], borough: [] } };

		db.find( {}, { limit: 10 }, function ( err, docs ) {
			data.items = docs;
			response();
		});

		db.distinct( 'cuisine', function ( err, docs ) {
			data.filters.cuisine = docs;
			response();
		});

		db.distinct( 'borough', function ( err, docs ) {
			data.filters.borough = docs;
			response();
		});

		var countResponse = 0;

		function response() {
			countResponse++;
			if ( countResponse === 3 ) {
				return res.send( data );
			}
		}
	});


	return router;
})();
