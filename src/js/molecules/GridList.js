import React from 'react';
import GridItem from '../atoms/GridItem';

export default class extends React.Component {
	render() {
		return (
	    	<div className="grid-list make-flex align-center text-center">
	    		{
	    			this.props.portfolioItems
	    			.filter(
	    				({category}) => (category.find(c => c.replace(' ', '-').toLowerCase() ==  this.props.displayCategory)) || this.props.displayCategory === "all" 
	    			)
	    			.map(({ category, name, caption, mainImage, information }) => (
			    		<GridItem key={`portfolioItem-${name.replace(' ', '-').toLowerCase()}`} name={name} caption={caption} mainImage={mainImage} information={information} />
	    			))
	    		}
	    	</div>			
		)
	}
}