import React from 'react';

export default class extends React.Component {
	getCategory() {
		this.props.setCategory(this.props.text.replace(' ', '-').toLowerCase());
	}

	render() {
		return(
			<button id={this.props.text} className="btn btn-primary" onClick={this.getCategory.bind(this)}>{this.props.text}</button>
		)
	}
}