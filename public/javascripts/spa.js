(function () {

	var Header = React.createClass({
		displayName: "Header",

		render: function () {
			return React.createElement(
				"header",
				null,
				React.createElement(
					"div",
					{ className: "content" },
					React.createElement(
						"span",
						{ className: "logo" },
						React.createElement(
							"a",
							{ href: "/" },
							"Restaurants"
						)
					),
					React.createElement(
						"form",
						{ action: "/", method: "GET", className: "header-form" },
						React.createElement("input", { type: "text", name: "search", placeholder: "Search...", className: "form-input", defaultValue: this.props.search }),
						React.createElement(
							"button",
							{ type: "submit", className: "btn btn-search" },
							"Search"
						)
					)
				)
			);
		}
	});

	var FilterBar = React.createClass({
		displayName: "FilterBar",

		render: function () {

			var items = this.props.items.map(function (item, index) {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"a",
						{ href: "#", key: index },
						item.name
					)
				);
			});
			return React.createElement(
				"div",
				{ className: "filter-bar" },
				React.createElement(
					"h4",
					null,
					"Filters"
				),
				item
			);
		}
	});

	var Body = React.createClass({
		displayName: "Body",

		render: function () {

			var items = this.props.items.map(function (item, index) {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"a",
						{ href: "#", key: index },
						item.name
					)
				);
			});

			return React.createElement(
				"div",
				null,
				React.createElement(
					"h5",
					null,
					"Pokémons"
				),
				items
			);
		}
	});

	var Compose = React.createClass({
		displayName: "Compose",

		getInitialState: function () {
			return { items: [], filters: [] };
		},

		componentDidMount: function () {
			var url = this.props.content;

			var xhr = new XMLHttpRequest();

			xhr.onreadystatechange = (function () {
				if (xhr.status === 200 && xhr.readyState === 4) {
					var items = JSON.parse(xhr.response);
					this.setState({ items: items.items, filters: items.filters });
				}
			}).bind(this);

			xhr.open('GET', url, true);
			xhr.send(null);
		},

		render: function () {

			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(
					"div",
					{ className: "content" },
					React.createElement(FilterBar, { items: this.state.filters }),
					React.createElement(Body, { items: this.state.items })
				)
			);
		}
	});

	ReactDOM.render(React.createElement(Compose, { content: "/data/home" }), document.getElementById('react-body'));
})();
