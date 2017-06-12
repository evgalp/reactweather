var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();

		var location = this.refs.location.value;

		if (location.length > 0) {
			this.refs.location.value = "";
			this.props.onSearch(location);
		}
	},
	render: function() {
		return(
			<form onSubmit={this.onFormSubmit}>
				<input type="search" placeholder="Search weather by city" ref="location"/>
				<button className="button expanded">get weather</button>
			</form>
		)
	}
});

module.exports = WeatherForm;

// http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=f5ca928af8a3834ddda7eb3e9809eadb