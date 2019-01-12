import React from 'react';
import GridItem from '../atoms/GridItem';

export default class extends React.Component {
	render() {
		return (
	    	<div className="grid-list make-flex align-center text-center">
	    		<GridItem />
	    		<GridItem />
	    		<GridItem />
	    	</div>			
		)
	}
}