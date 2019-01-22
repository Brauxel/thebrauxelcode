import React from 'react';
import DetailsIcon from '../../assets/images/details-off.png';
import Slider from './Slider';
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

					<Slider content={this.props.content} />
				</div>
		  	)}
		  </Popup>			
		)
	}
}