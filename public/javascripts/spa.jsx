( function () {
	/**
	* @jsx React.DOM
	*/

	var Body = React.createClass({
		render: function () {
			return (<h1>Oláá</h1>)
		}
	});


	ReactDOM.render( <Body />, document.getElementById( 'react-body' ) );
})();
