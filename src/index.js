import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/eml.scss';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import Footer from './components/Footer';
import About from './components/About';
import Parallax from './components/Parallax';
import Diferent from './components/Diferent';
import Services from './components/Services';
import Clients from './components/Clients';
import Certifications from './components/Certifications';
import Form from './components/Form';

const Index = () => {
    return(
        <React.Fragment>
            <Header/>
            <Slider/>
            <About/>
            <Parallax/>
            <Diferent/>
            <Services/>
            <Clients/>
            <Certifications/>
            <Form/>
            <Footer/>
        </React.Fragment>
    );
}

ReactDOM.render(<Index/>, document.getElementById('root'));