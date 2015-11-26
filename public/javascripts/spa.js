( function () {
	/**
	* @jsx React.DOM
	*/

	var Body = React.createClass({displayName: "Body",
		render: function () {
			return (React.createElement("h1", null, "Oláá"))
		}
	});


	ReactDOM.render( React.createElement(Body, null), document.getElementById( 'react-body' ) );
})();
