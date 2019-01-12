import React from 'react';
import Button from '../atoms/Button'

export default class extends React.Component {
    render() {
        return (
	    	<div className="container text-center">
	        	<div className="filters filters-desktop">
	        		<span className="title">Filter:</span>
	        		<Button text="All" onClick={this.props.setCategory} />
	        		<Button text="Vue" onClick={this.props.setCategory} />
	        		<Button text="React" onClick={this.props.setCategory} />
	        		<Button text="Preact" onClick={this.props.setCategory} />
	        		<Button text="Shopify" onClick={this.props.setCategory} />
	        		<Button text="Wordpress" onClick={this.props.setCategory} />
	        		<Button text="Laravel" onClick={this.props.setCategory} />
	        	</div>
	        </div>
        )
    }
}
