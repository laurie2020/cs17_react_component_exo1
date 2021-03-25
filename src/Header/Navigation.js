import React from 'react';
import './navigation.css'



export default class Navigation extends React.Component {
    
    render() {
        let display = (link) => {
            console.log(link);
        }
        return(
            <nav>
                <button onClick={() => {display("accueil")}}>Link 1</button>
                <button onMouseEnter={() => {display("Galerie")}}>Link 2</button>
                <button onDoubleClick={() => {display("Contact")}}>Link 3</button>
            </nav>
        )
    }
}