import React from 'react';

const Timeline = () => {

    return (
        <>
            <section id="timeline">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="text-uppercase">Timeline</h2>
                            <hr className="star-dark mb-5" />

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="list-group timeline">
                                <li className="list-group-item">
                                    <div className="timeline-image clickable">
                                        <a href="http://www.globalvision.ca/" target="_blank" rel="noreferrer noopener">
                                            <img className="rounded-circle img-fluid" src="assets/img/timeline/globalvision.png" />
                                        </a>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>2013</h4>
                                            <h4 className="subheading">Global Vision</h4><h5>Junior Team Canada</h5>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Represented Canada as Global Vision Junior Team Canada Ambassador on a mission to South-East Asia to brand the province of Saskatchewan</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item timeline-inverted">
                                    <div className="timeline-image clickable">
                                        <a href="https://hacked.compeclub.com/" target="_blank" rel="noreferrer noopener">
                                            <img className="rounded-circle img-fluid" src="assets/img/timeline/hackED_edit.png" />
                                        </a>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>2019</h4>
                                            <h4 className="subheading">HackEd Hackathon</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Participated in Alberta's Largest Student Run Hackathon</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="timeline-image clickable">
                                        <a href="https://www.usask.ca/" target="_blank" rel="noreferrer noopener">
                                            <img className="rounded-circle img-fluid" src="assets/img/timeline/usask.png" />
                                        </a>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>2021</h4>
                                            <h4 className="subheading">University of Saskatchewan</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">BSc. in Computer Science w/ Distinction</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item timeline-inverted">
                                    <div className="timeline-image">
                                        <h4>Be Part
                                        <br />
                                        Of My
                                        <br />
                                        Journey!
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Timeline;