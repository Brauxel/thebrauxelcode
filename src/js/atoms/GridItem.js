import React from 'react';
import IAmGIA from '../../assets/images/iamgia.png';
import DetailsIcon from '../../assets/images/details-off.png';
import DecjubaImage from '../../assets/images/portfolio/decjuba-1.jpg';
import IamGIAImage from '../../assets/images/portfolio/iamgia-1.jpg';

export default class extends React.Component {
	render() {
		return (
			<div className="item">
				<div className="hover-state">
	                <div className="hover-buttons align-center space-evenly make-flex">
	                    <a href="#" className="btn btn-primary with-icon make-flex">
	                        <span className="icon"><img src={DetailsIcon} /></span>
	                        <span className="text">Details</span>
	                    </a>
	                    <a href="#" className="btn btn-primary">View Live</a>                                
	                </div>
	            </div>

				<img className="main-image" src={require('./../../assets/images/portfolio/' + this.props.image)} />

	            <div className="information">
	                <h5>{this.props.name}</h5>
	                <p>{this.props.text}</p>
	            </div>
			</div>
		)
	}
}