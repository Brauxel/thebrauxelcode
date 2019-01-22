import React from 'react';

export default class extends React.Component {
	render() {
		return(
			<div className="slide">
				<img className="portfolio-image" src={this.props.item.image} />

				<div className="inner-content">
					<h3>{this.props.item.title}</h3>
					<p>{this.props.item.description}</p>
				</div>
			</div>
		)
	}
}