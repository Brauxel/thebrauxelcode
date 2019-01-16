import React from 'react';
import Filters from '../molecules/Filters';
import GridList from '../molecules/GridList';

const PORTFOLIO = [
  { category: ["Vue", "Shopify", "Laravel", "Webpack"], name: "I.AM.GIA", text:"eCommerce", "image": "iamgia-1.jpg" },
  { category: ["Shopify", "Laravel", "Webpack"], name: "Decjuba", text:"eCommerce", "image": "decjuba-1.jpg" },
  { category: ["Vue", "Shopify", "Laravel", "Webpack"], name: "Zomp", text:"eCommerce", "image": "zomp-1.jpg" },
  { category: ["WordPress", "React", "Webpack", "Gulp"], name: "Impromy", text:"Content Driven & Custom Apps", "image": "impromy-1.jpg" },
  { category: ["React", "Webpack"], name: "Vpass Express", text:"iPad Visitor Management System", "image": "vpass-1.jpg" },
  { category: ["Shopify", "React", "Webpack"], name: "Thr1ve Me", text:"eCommerce", "image": "thrive-1.jpg" },
  { category: ["Laravel", "Preact", "Webpack"], name: "Glue", text:"Linking Qantas Frequent Flyer miles", "image": "glue-1.jpg" }    
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
