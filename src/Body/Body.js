import React from 'react';
import Article from './Article';
import './body.css';


export default class Body extends React.Component {
    
    nombreArticles = (nbArticle) => {
        console.log(nbArticle);
    }
    render() {
        return(
            <div className="body">
                <Article titre="Les tartines" giveNombreArticle = {(x) => {this.nombreArticles(x)}}/>
                <Article titre="Coding School" giveNombreArticle = {(x) => {this.nombreArticles(x)}}/>
            </div>
        );
    }
}