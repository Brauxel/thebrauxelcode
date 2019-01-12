import React from 'react';
import Filters from '../molecules/Filters';
import IAmGIA from '../../assets/images/iamgia.png';
import DetailsIcon from '../../assets/images/details-off.png';

export default class extends React.Component {
    render() {
        return (
            <section className="portfolio-section">
            	<h2 className="text-center">Portfolio</h2>

            	<Filters />

            	<div className="grid-list make-flex align-center text-center">
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

            			<img className="main-image" src={IAmGIA} />

                        <div className="information">
                            <h5>yellow tea and flowers</h5>
                            <p>sea, boat, photo</p>
                        </div>
            		</div>

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

                        <img className="main-image" src={IAmGIA} />

                        <div className="information">
                            <h5>yellow tea and flowers</h5>
                            <p>sea, boat, photo</p>
                        </div>
                    </div>

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

                        <img className="main-image" src={IAmGIA} />

                        <div className="information">
                            <h5>yellow tea and flowers</h5>
                            <p>sea, boat, photo</p>
                        </div>
                    </div>

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

                        <img className="main-image" src={IAmGIA} />

                        <div className="information">
                            <h5>yellow tea and flowers</h5>
                            <p>sea, boat, photo</p>
                        </div>
                    </div>

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

                        <img className="main-image" src={IAmGIA} />

                        <div className="information">
                            <h5>yellow tea and flowers</h5>
                            <p>sea, boat, photo</p>
                        </div>
                    </div>                                                                                

            	</div>
            </section>
        )
    }
}
