import React from 'react';
import Filters from '../molecules/Filters';

export default class extends React.Component {
    render() {
        return (
            <section className="portfolio-section">
            	<h2 className="text-center">Portfolio</h2>

            	<Filters />
            </section>
        )
    }
}
