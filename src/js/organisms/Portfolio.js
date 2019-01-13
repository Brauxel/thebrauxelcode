import React from 'react';
import Filters from '../molecules/Filters';
import GridList from '../molecules/GridList';

const PORTFOLIO = [
  { category: "Vue", name: "Football", text:"Lorem Ipsum" },
  { category: "React", name: "iPod Touch", text:"Lorem Ipsum" },
  { category: "Preact", name: "iPhone 5", text:"Lorem Ipsum" },
  { category: "Shopify", name: "Holiday", text:"Lorem Ipsum" }
];

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
          displayCategory: category
        });
    }


    render() {
        return (
            <section className="portfolio-section">
            	<h2 className="text-center">Portfolio</h2>

            	<Filters setCategory={this.setCategory.bind(this)} />

                <GridList displayCategory={this.state.displayCategory} portfolioItems={PORTFOLIO} />
            </section>
        )
    }
}
