import React from 'react';
import Filters from '../molecules/Filters';
import GridList from '../molecules/GridList';

const PORTFOLIO = [
  { category: ["Vue", "React"], name: "Football", text:"Lorem Ipsum" },
  { category: ["Shopify", "React"], name: "iPod Touch", text:"Lorem Ipsum" },
  { category: ["Shopify", "Preact"], name: "iPhone 5", text:"Lorem Ipsum" },
  { category: ["Wordpress", "Laravel"], name: "Holiday", text:"Lorem Ipsum" }
];

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          displayCategory: "all"
        };
        this.setCategory = this.setCategory.bind(this);
    }
    setCategory(category) {
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
