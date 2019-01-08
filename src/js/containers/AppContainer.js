import React from 'react';
import Home from './Home';
import Header from '../organisms/Header';

export default class extends React.Component {
    render() {
        return (
            <div className="app-container">
                <div className="container">
                    <Header />
                </div>

                <Home />
            </div>
        )
    }
}