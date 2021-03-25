import React from 'react';
import './article.css'

export default class Article extends React.Component {
    nombreArticle = 2;
    render() {
        
        return(
            <div className="article">
                <div>
                    <img src="/img/toast.jpg" width="250" alt="toast"/>
                </div>
                <div>
                    <h2>Mon premier article</h2>
                    <p className='article-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ipsum mollitia voluptatum veritatis nam, facere in. Unde labore quam fugit enim, architecto possimus incidunt, nemo cum ab perspiciatis minus tempore ad! Doloremque ipsum officiis eius nulla molestiae corrupti mollitia incidunt corporis saepe explicabo, illum expedita a in blanditiis harum. Molestiae nemo ab cupiditate perspiciatis quis reprehenderit quod incidunt soluta possimus?</p>
                </div>
                <button onClick={() => {console.log(this.props.titre);}}>click</button>
                <button onClick={() => this.props.giveNombreArticle(this.nombreArticle)}>nbArticle</button>
            </div>
        );
    }
}