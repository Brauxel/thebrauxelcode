import React from 'react';
import MainNav from '../molecules/MainNav';
import Hamburger from '../atoms/Hamburger';
import Logo from '../atoms/Logo';

export default class extends React.Component {
    render() {
        return (
            <header className="header-container make-flex space-between align-center">
                <Logo />
                <Hamburger />
                <MainNav />
            </header>
        )
    }
}
