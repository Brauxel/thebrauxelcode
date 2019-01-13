import React from 'react';
import GridItem from '../atoms/GridItem';

export default class extends React.Component {
	render() {
		return (
	    	<div className="grid-list make-flex align-center text-center">
	    		{
	    			this.props.portfolioItems
	    			.filter(({category}) => this.props.displayCategory === category || this.props.displayCategory === "all" )
	    			.map(({ category, name, text }) => (
			    		<GridItem key={`portfolioItem-${name}`} name={name} text={text} />
	    			))
	    		}
	    	</div>			
		)
	}
}