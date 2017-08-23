import React from 'react';

export default class Navigation extends React.Component {

    render() {
        return (
            <nav>
                <ul className="nav nav-tabs">
                    <li className="active"><a href="#">8-Bit Youtube</a></li>
                    <li><a href="#">Info</a></li>
                </ul>
            </nav>
        );
    }
}