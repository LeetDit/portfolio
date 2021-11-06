import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Header = () => {

    return (
        <>
            <header className="text-center text-white bg-primary masthead">
                    <div className="container">
                        <Slide top>
                            <img className="img-fluid d-block mx-auto mb-5" style={{width:'30%', borderRadius: '50%', border: '3px solid white'}} src="assets/img/profile/profile.png"/>
                        </Slide>
                        <Fade >
                            <h1>Jaden Park</h1>
                            <hr className="star-light"/>
                            <h2 className="font-weight-light mb-0">Software / Full-Stack Developer - Vancouver, BC</h2>
                        </Fade>
                    </div>
            </header>
        </>
    )
}

export default Header;