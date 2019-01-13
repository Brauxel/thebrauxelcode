import React from 'react';

export default class extends React.Component {
	getCategory() {
		console.log("getCategory", this.props.text);

		this.props.setCategory(this.props.text);
	}

	render() {
		return(
			<button id={this.props.text} className="btn btn-primary" onClick={this.getCategory.bind(this)}>{this.props.text}</button>
		)
	}
}