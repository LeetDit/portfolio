import React from 'react';

const Footer = () => {

    return (
        <>
            <footer className="text-center footer">
                <div className="container">
                    <div className="row">

                        <div className="col mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p>
                                Vancouver,
                                <br />
                                BC
                            </p>
                        </div>

                        <div className="col mb-5 mb-lg-0">
                            <h4 className="text-uppercase">Around the Web</h4>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="btn btn-outline-light text-center btn-social rounded-circle" role="button" href="https://github.com/LeetDit" target="_blank" rel="noreferrer noopener">
                                        <i className="fa fa-github fa-fw"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn btn-outline-light text-center btn-social rounded-circle" role="button" href="https://www.linkedin.com/in/jaden-park-07ab1021a/" target="_blank" rel="noreferrer noopener">
                                        <i className="fa fa-linkedin fa-fw"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;