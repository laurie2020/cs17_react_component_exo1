import React from 'react';
import './searchbar.css'

export default class SearchBar extends React.Component {

    render() {

        return(
            <div>
                <label htmlFor="search">Search: </label>
                <input type="search" name="search"/>
                <button type="submit">Go</button>
            </div>
            
        )
    }
}