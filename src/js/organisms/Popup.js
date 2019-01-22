import React from 'react';
import IAmGIA from '../../assets/images/iamgia.png';
import DetailsIcon from '../../assets/images/details-off.png';
import DecjubaImage from '../../assets/images/portfolio/decjuba-1.jpg';
import IamGIAImage from '../../assets/images/portfolio/iamgia-1.jpg';
import Popup from 'reactjs-popup';

const popupStyles = {
    'background' : '#43474d',
    'border' : 'none',
    'maxWidth' : '768px',
    'width' : '85%'
};

const overlayStyles = {
	'overflowY': 'scroll'
};

export default class extends React.Component {
	render() {
		return (
		  <Popup
		    trigger={<button className="btn btn-primary with-icon make-flex"> <span className="icon"><img src={DetailsIcon} /></span> <span className="text">Details</span> </button>}
		    contentStyle={popupStyles}
		    overlayStyle={overlayStyles}
		    modal
		    closeOnDocumentClick
		  >
		  	{close => (
		  		<div className="portfolio-item-details">
					<a className="close" onClick={close}>
						&times;
					</a>

					<img className="portfolio-image" src={this.props.content[0].image} />

					<div className="inner-content">
						<h3>{this.props.content[0].title}</h3>
						<p>{this.props.content[0].description}</p>
					</div>

				</div>
		  	)}
		  </Popup>			
		)
	}
}