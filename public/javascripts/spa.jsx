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

			var items = this.props.items.map( function ( item, index ) {
				return (<div><a href="#" key={index}>{item.name}</a></div>);
			});
			return (
				<div className="filter-bar">
					<h4>Filters</h4>
					{item}
				</div>
			);
		}
	});


	var Body = React.createClass({
		render: function () {
	
			var items = this.props.items.map( function ( item, index ) {
				return (<div><a href="#" key={index}>{item.name}</a></div>);
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
			return { items: [], filters: [] };
		}
		
		, componentDidMount: function () {
			var url = this.props.content;

			var xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				if ( xhr.status === 200 && xhr.readyState === 4 ) {
					var items = JSON.parse( xhr.response );
					this.setState({ items: items.items, filters: items.filters });
				}
			}.bind( this );

			xhr.open( 'GET', url, true );
			xhr.send( null );
		}
		
		, render: function () {

			return (
				<div>
						<Header />

						<div className="content">

							<FilterBar items={this.state.filters} />

							<Body items={this.state.items} />

						</div>
				</div>
			);
		}
	});


	ReactDOM.render( <Compose content="/data/home" />, document.getElementById( 'react-body' ) );

})();
