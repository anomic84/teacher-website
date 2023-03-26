import React from 'react';
import { Contact, Footer, Hero, Navbar, About } from './containers'
import './app.css'

const App = () => {
    return (
        <div>
            <div className="appgradient">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Contact />
            <Footer />
        </div>
    )
};

export default App;