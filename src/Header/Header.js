import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar'
import './header.css'

export default class Header extends React.Component {

    render() {

        return(
            <header>
                <Navigation />
                <SearchBar />
            </header>
        )
    }
}