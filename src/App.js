import React from 'react';
import { Footer, Navbar } from './containers'
import { About, Contact, Hero, Math, Reading, Writing, Science, SocialStudies } from './pages'
import './app.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div>
                <div >

                    <Navbar />

                    <Routes>

                        <Route path='/' exact element={<Hero />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/math' element={<Math />} />
                        <Route path='/reading' element={<Reading />} />
                        <Route path='/writing' element={<Writing />} />
                        <Route path='/science' element={<Science />} />
                        <Route path='/socialstudies' element={<SocialStudies />} />

                    </Routes>

                    <Contact/>

                </div>
            </div>
        </Router >
    )
};

export default App;