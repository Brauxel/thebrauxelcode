import React from 'react';
import Filters from '../molecules/Filters';
import GridList from '../molecules/GridList';

const PORTFOLIO = [
    { 
        name: "I.AM.GIA",
        category: ["Vue", "Shopify", "Laravel", "Webpack"],
        caption:"eCommerce",
        mainImage: "iamgia-1.jpg",
        information: [
            {
                title: 'Slide 1',
                description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg'
            }
        ]        
    },
    {
        name: "Decjuba",
        category: ["Shopify", "Laravel", "Webpack"],
        caption:"eCommerce",
        mainImage: "decjuba-1.jpg",
        information: [
            {
                title: 'Slide 1',
                description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg'
            }
        ]                
    },
    { 
        name: "Zomp",
        category: ["Vue", "Shopify", "Laravel", "Webpack"],
        caption:"eCommerce",
        mainImage: "zomp-1.jpg",
        information: [
            {
                title: 'Slide 1',
                description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg'
            }
        ]                
    },
    {
        name: "Impromy",
        category: ["WordPress", "React", "Webpack", "Gulp"],
        caption:"Content Driven & Custom Apps",
        mainImage: "impromy-1.jpg",
        information: [
            {
                title: 'Slide 1',
                description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg'
            }
        ]                
    },
    {
        name: "Vpass Express",
        category: ["React", "Webpack"],
        caption:"iPad Visitor Management System",
        mainImage: "vpass-1.jpg",
        information: [
            {
                title: 'Slide 1',
                description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg'
            }
        ]                
    },
    {
        name: "Thr1ve Me", 
        category: ["Shopify", "React", "Webpack"],
        caption:"eCommerce",
        mainImage: "thrive-1.jpg",
        information: [
            {
                title: 'Slide 1',
                description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg'
            }
        ]                
    },
    {
        name: "Glue",
        category: ["Laravel", "Preact", "Webpack"],
        caption:"Linking Qantas Frequent Flyer miles",
        mainImage: "glue-1.jpg",
        information: [
            {
                title: 'Slide 1',
                description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg'
            }
        ]                
    }
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
