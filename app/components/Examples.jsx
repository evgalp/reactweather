var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
// 	render: function(){
// 		return(
// 			<h3>Examples comp</h3>
// 		)
// 	}
// });

var Examples = (props) => {
	return(
		<div>
			<h1 className="text-centered">Examples</h1>
			<p>Example locations to try out</p>
			<ol>
				<li>
					<Link to='/?location=Dnipro'>Dnipro</Link>
				</li>
				<li>
					<Link to='/?location=Paris'>Paris</Link>
				</li>
			</ol>
		</div>
	)
};

module.exports = Examples;