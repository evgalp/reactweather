var React = require('react');

// var About = React.createClass({
// 	render: function(){
// 		return(
// 			<h3>About comp</h3>
// 		)
// 	}
// });

var About = (props) => {
	return(
		<div>
			<h1 className="text-centered">About comp</h1>
			<p>about p</p>
		</div>
	)
};

module.exports = About;