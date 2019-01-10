import React from 'react';
import Filters from '../molecules/Filters';
import IAmGIA from '../../assets/images/iamgia.png';

export default class extends React.Component {
    render() {
        return (
            <section className="portfolio-section">
            	<h2 className="text-center">Portfolio</h2>

            	<Filters />

            	<div className="grid-list make-flex align-center text-center">
            		<div className="item">
            			<div className="hover-state">&nbsp;</div>
            			<img className="main-image" src={IAmGIA} />
            			<h5>yellow tea and flowers</h5>
            			<p>sea, boat, photo</p>
            		</div>

            		<div className="item">
            			<img className="main-image" src={IAmGIA} />
            			<h5>yellow tea and flowers</h5>
            			<p>sea, boat, photo</p>
            		</div>

            		<div className="item">
            			<img className="main-image" src={IAmGIA} />
            			<h5>yellow tea and flowers</h5>
            			<p>sea, boat, photo</p>
            		</div>

            		<div className="item">
            			<img className="main-image" src={IAmGIA} />
            			<h5>yellow tea and flowers</h5>
            			<p>sea, boat, photo</p>
            		</div>            		
            	</div>
            </section>
        )
    }
}
