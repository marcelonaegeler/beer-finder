( function () {

	var Header = React.createClass({
		render: function () {
			return (
				<header>
					<div className="content">

						<span className="logo">
							<a href="/">Restaurants</a>
						</span>

						<form action="/" method="GET" className="header-form">
							<input type="text" name="search" placeholder="Search..." className="form-input" defaultValue={this.props.search} />
							<button type="submit" className="btn btn-search">Search</button>
						</form>

					</div>
				</header>
			);
		}
	});


	var FilterBar = React.createClass({
		render: function () {
			return (
				<div className="filter-bar">
					<h4>Filters</h4>
				</div>
			);
		}
	});


	var Body = React.createClass({
		render: function () {
	
			var items = this.props.items.map( function ( item, index ) {
				return (<a href="#" key={index}>{item.name}</a>);
			});
	
			return (
				<div>
					<h5>Pokémons</h5>
					{items}
				</div>
			);	
		}
	});


	var Compose = React.createClass({
		getInitialState: function () {
			return { items: [] };
		}
		
		, componentDidMount: function () {
			var url = this.props.content;

			var xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				if ( xhr.status === 200 && xhr.readyState === 4 ) {
					var items = JSON.parse( xhr.response );
					this.setState({ items: items });
				}
			}.bind( this );

			xhr.open( 'GET', url, true );
			xhr.send( null );
		}
		
		, render: function () {

			//var items = this.getContent();

			return (
				<div>
						<Header />

						<div className="content">

							<FilterBar />

							<Body items={this.state.items} />

						</div>
				</div>
			);
		}
	});


	ReactDOM.render( <Compose content="/data.json" />, document.getElementById( 'react-body' ) );
})();
