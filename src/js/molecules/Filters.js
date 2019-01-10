import React from 'react';

export default class extends React.Component {
    render() {
        return (
	    	<div className="container text-center">
	        	<div className="filters filters-desktop">
	        		<span className="title">Filter:</span>
	        		<a href="#" className="btn btn-primary">All</a>
	        		<a href="#" className="btn btn-primary">Vue</a>
	        		<a href="#" className="btn btn-primary">React</a>
	        		<a href="#" className="btn btn-primary">Preact</a>
	        		<a href="#" className="btn btn-primary">Shopify</a>
	        		<a href="#" className="btn btn-primary">Wordpress</a>
	        		<a href="#" className="btn btn-primary">Laravel</a>
	        	</div>
	        </div>
        )
    }
}
