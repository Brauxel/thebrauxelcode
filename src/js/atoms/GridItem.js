import React from 'react';
import IAmGIA from '../../assets/images/iamgia.png';
import DetailsIcon from '../../assets/images/details-off.png';
import DecjubaImage from '../../assets/images/portfolio/decjuba-1.jpg';
import IamGIAImage from '../../assets/images/portfolio/iamgia-1.jpg';
import Popup from 'reactjs-popup';

const popupStyles = {
    background : '#43474d',
    'border' : 'none',
    'maxWidth' : '1024px',
    'width' : '100%'
};

export default class extends React.Component {
	render() {
		return (
			<div className="item">
				<div className="hover-state">
	                <div className="hover-buttons align-center space-evenly make-flex">
					  <Popup
					    trigger={<button className="btn btn-primary with-icon make-flex"> <span className="icon"><img src={DetailsIcon} /></span> <span className="text">Details</span> </button>}
					    contentStyle={popupStyles}
					    modal
					    closeOnDocumentClick
					  >
					  	{close => (
					  		<div className="portfolio-item-details">
								<a className="close" onClick={close}>
									&times;
								</a>

								<div className="inner-content">
									<h3>Modal Title</h3>
									<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
								</div>

							</div>
					  	)}
					  </Popup>

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