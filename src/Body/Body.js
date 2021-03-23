import React from 'react';
import Article from './Article';
import './body.css';


export default class Body extends React.Component {

    render() {

        return(
            <div className="body">
                <Article />
                <Article />
            </div>
        )
    }
}