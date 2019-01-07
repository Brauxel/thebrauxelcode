import React from 'react';
import NavElement from '../atoms/NavElement';

export default class extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <NavElement />
                </ul>
            </nav>
        )
    }
}
