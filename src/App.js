import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import './app.css'

export default class App extends React.Component {
    

    render() {

        return(

            <div>
                <Header />
                <Body />
                <Footer />
            </div>

        )
    }
}