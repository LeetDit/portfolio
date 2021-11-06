import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Header from '../Header';
import Portfolio from '../Portfolio';
import Skills from '../Skills';
import Timeline from '../Timeline';

const Home = () => {
    return (
        <>
            <Header />
            <Timeline />
            <About />
            <Portfolio />
            <Skills />
            <Contact />
        </>
    )
}

export default Home;