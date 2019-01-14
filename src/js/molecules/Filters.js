import React from 'react';
import Button from '../atoms/FilterButton'

export default class extends React.Component {
    render() {
        return (
	    	<div className="container text-center">
	        	<div className="filters filters-desktop">
	        		<span className="title">Filter:</span>
	        		<Button text="All" setCategory={this.props.setCategory} />
	        		<Button text="Vue" setCategory={this.props.setCategory} />
	        		<Button text="React" setCategory={this.props.setCategory} />
	        		<Button text="Preact" setCategory={this.props.setCategory} />
	        		<Button text="Shopify" setCategory={this.props.setCategory} />
	        		<Button text="Wordpress" setCategory={this.props.setCategory} />
	        		<Button text="Webpack" setCategory={this.props.setCategory} />
	        		<Button text="Gulp" setCategory={this.props.setCategory} />	        		
	        		<Button text="Laravel" setCategory={this.props.setCategory} />
	        	</div>
	        </div>
        )
    }
}
