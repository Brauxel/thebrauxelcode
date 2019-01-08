import React from 'react';
import MainNav from '../molecules/MainNav';
import Hamburger from '../atoms/Hamburger';

export default class extends React.Component {
    render() {
        return (
            <header className="header-container make-flex space-between align-center">
                <div>Logo goes here</div>
                <Hamburger />
                <MainNav />
            </header>
        )
    }
}
