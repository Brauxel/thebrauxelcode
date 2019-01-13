import React from 'react';
import Filters from '../molecules/Filters';
import GridList from '../molecules/GridList';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          displayCategory: "all",
          products: props.products,
          productCategories: props.productCategories
        };
        this.setCategory = this.setCategory.bind(this);
    }
    setCategory(category) {
        console.log("setCategory portfolio js", category);
        this.setState({
          //displayCategory: category
        });
    }


    render() {
        return (
            <section className="portfolio-section">
            	<h2 className="text-center">Portfolio</h2>

            	<Filters setCategory={this.setCategory.bind(this)} />

                <GridList />
            </section>
        )
    }
}
