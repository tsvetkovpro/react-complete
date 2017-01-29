import React from 'react';

class ComponentTwo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: props.count
		};
		// this.onClick = this.onClick.bind(this);
	}

	// onClick () {
	// 	this.setState({
	// 		count: this.state.count + 1
	// 	})
	// }
	render() {
		return (
			<div>
				<h3>from componentTwo using react.component</h3>
				<p>cout {this.state.count}</p>
				<button className="button" onClick={() => {
					this.setState({
						count: this.state.count + 1
					});
				}}>Button two
				</button>
			</div>
		);
	}
}

ComponentTwo.defaultProps = {
	count: 789
};

ComponentTwo.propTypes = {
	count: React.PropTypes.number
};

export default ComponentTwo;