import React from 'react';

const About = () => {
    return (
        <>
            <section id="about" className="text-white bg-primary mb-0">
                <div className="container">
                    <h2 className="text-uppercase text-center text-white">About Me</h2>
                    <hr className="star-light mb-5" />
                    <div className="row">
                        <div className="col-lg-4 ms-auto">
                            <p className="lead">Hi! I am an enthusiastic software developer with strong interest in modern and future software technology and their potentials. With drive in problem-solving, clean-code and efficient algorithms, I am determined to serve users around the globe and bring positive impact for users with central focus on protecting user's viral assets and allolwing users to have seamless interaction via software.</p>
                        </div>
                        <div className="col-lg-4 me-auto">
                            <p className="lead">Software development is my passionate, I love problem solving and algorithm challenges. You can often find me at a cafe solving Leetcode and ProjectEuler with cup of americano. I thrive in developing web/mobile application to easily engage users with modern technology and brainstorm how technology can make our life more interesting and take care of our laziness. If there is something you and I have in common, please don't hesistate to send me a message, Let's Connect! :)</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;