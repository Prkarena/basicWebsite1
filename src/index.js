import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
 /****************** Components ******************/
import Routes from './routes';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
/********************* Css ************************/
import './css/index.css';
const App = () => {
    return(
        <BrowserRouter>
        <div className = "mainContainer">
            <Header/>   
                <Routes/>
            <Footer />
        </div>
        </BrowserRouter>
    )
}

ReactDom.render(<App/>,document.getElementById("root"));