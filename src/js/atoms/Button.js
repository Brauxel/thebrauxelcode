import React from 'react';

export default class extends React.Component {
	render() {
		return(
			<button className="btn btn-primary" onClick={this.props.onClick}>{this.props.text}</button>
		)
	}
}