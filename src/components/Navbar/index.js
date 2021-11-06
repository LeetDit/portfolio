import React, {useEffect, useState } from 'react';

const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        const mainNav = document.querySelector('#mainNav');
        if (position > 100) {
            mainNav.classList.add('navbar-shrink');
            mainNav.classList.add('opacity-75');
        }else{
            mainNav.classList.remove('navbar-shrink');
            mainNav.classList.remove('opacity-75');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id="mainNav" className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase">
            <div className="container">
                <a className="navbar-brand" href="#page-top">Welcome!</a>
                <button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
                <div id="navbarResponsive" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#timeline">Timeline</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;