import React from 'react';

export default class extends React.PureComponent {
	render() {
		return(
		    <div className="backArrow arrow" onClick={this.props.goToPrevSlide}>
		      pev
		    </div>			
		);
	}
}