import React from 'react';

export default class extends React.PureComponent {
	render() {
		return(
		    <div className="nextArrow arrow" onClick={this.props.goToNextSlide}>
		      nextArrow
		    </div>			
		);
	}
}