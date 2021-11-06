import React, { useState } from 'react';
import Modal from 'react-modal';
import { CloseCircleOutlined } from '@ant-design/icons';

const Portfolio = () => {

    Modal.setAppElement('#root');

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(10, 20, 30, 0.75)'
        },
        content: {
            width: '50%',
            height: '80%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRaidus: '15px',
            backgroundColor: 'rgba(10,20,30,0.75)',
            border: '1px solid #ccc',
            borderRadius: '25px'
        }
    }

    const items = [
        {
            name: 'eCommerce platform for online labor marketplace',
            img: 'assets/img/portfolio/ecommerce.jpg',
            type: 'Android Development',
            videoLink: 'https://www.youtube.com/embed/16GpmuTQQGI',
            github: 'https://github.com/CMPUT301W18T15/TaskTaskeriffy/wiki',
            technology: ['Android Studio', 'Git'],
            language: ['Java'],
            body:'Developed an android device application for users to upload a desired tasks to be done, where labor providers could be notified based on their geolocation relevant to the task location. Providers will submit an appropriate cost of the tasks to be completed and once requester and provider mutually agrees on the cost, the task is to be completed by the provider by the given time.',
        },
        {
            name: 'Covid-19 information sharing networking platform',
            img: 'assets/img/portfolio/covid.jpg',
            type: 'Web Development',
            videoLink: 'https://www.youtube.com/embed/G-888r3rtkg',
            github: 'https://github.com/heesoopark5473/CMPT-350/tree/main/Project/Submission/source_code',
            technology: ['Firebase', 'React', 'Bootstrap', 'Git'],
            language: ['Javascript', 'HTML', 'CSS'],
            body: "Developed social networking platform to raise awareness and provide information regarding Covid-19. Depending on the user's geographical location, user is able to post their experiences and latest information regarding Covid-19 virus.",
        },
        {
            name: 'eLearning Platform',
            img: 'assets/img/portfolio/eLearning.jpg',
            type: 'Web Development',
            videoLink: '',
            github: '',
            technology: ['React', 'Express', 'Node', 'mongoDB', 'Bootstrap', 'Git'],
            language: ['Javascript', 'HTML', 'CSS'],
            body: 'Developed eLearning platform aiming to support users who wish to share their technical knowledge and skills. Users can post tutorial videos on a specific topic they wish to instruct. The student who wish to enroll and learn posted tutorials can participate in the course and watch posted videos.',  
        },
        {
            name: 'Software Defined Network using TCP Sockets and peer-to-peer program (FIFO)',
            img: 'assets/img/portfolio/SDN.jpg',
            type: 'Computer Networks',
            videoLink: '',
            github: 'https://github.com/heesoopark5473/CMPUT-379/tree/main/Assignments/Assignment_03/Submission/submit',
            technology: ['TCP', 'Git'],
            language: ['C'],
            body: 'Modelled and developed Software Defined Network Model that utilizes signals for examining the progress of the running processes, using FIFO and TCP sockets for communication between local/remote machines via IP address with implementation of I/O multiplexing for nonblocking I/O.',  
        },
        {
            name: 'A Multithreaded System Simulator using pthreads /w dealock prevention and synchronization',
            img: 'assets/img/portfolio/multithread.jpg',
            type: 'Computer Networks',
            videoLink: '',
            github: 'https://github.com/heesoopark5473/CMPUT-379/tree/main/Assignments/Assignment_04/Submission/submit',
            technology: ['TCP', 'Git'],
            language: ['C'],
            body: "Development of a multithreaded system simulator using pthreads with deadlock prevention and synchronization to monitor thread synchronization and 'racing for resources'.",  
        },
        {
            name: 'Software development for game-bassed assessment resarch under the supervision from Dr. Ying Cui',
            img: 'assets/img/portfolio/gamification.jpg',
            type: 'Game Development',
            videoLink: '',
            github: 'https://github.com/cmput401-winter2019/Party-Designer-Math/wiki',
            technology: ['Phaser 3', 'Flask', 'Git'],
            language: ['Javascript', 'HTML', 'CSS'],
            body: "Development of game-based assessment (gamification) in the area of mathematics targeting grades 3 to 5 students using the framework Phaser. The game allows instructor to track and assess student's performance and improvement while students are rewarded based on their accuracy and performance of relevant mathematical challenges.",  
        },
    ]

    const [modalIsOpen, setIsOpen] = useState(false);
    const [clickedItem, setClickedItem] = useState([]);

    const openModal = (i, item) => {
        document.body.style.overflow = 'hidden';
        setClickedItem(item);
        setIsOpen(true);
    }

    const closeModal = () => {
        console.log(clickedItem.name);
        document.body.style.overflow = 'unset';
        setIsOpen(false);
    }

    const element = (item, i) => (
        <div className="col-md-6 col-lg-4">
            <a className="d-block mx-auto portfolio-item" style={{cursor: 'pointer'}} onClick={() => openModal(i, item)}>
                <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                    <div className="text-center text-white my-auto portfolio-item-caption-content w-100">
                        <i className="fa fa-search-plus fa-2x"></i>
                        <h3>{item.type}</h3>
                    </div>
                </div>
                <img className="img-fluid" src={item.img}></img>
            </a>
        </div>
    )

    const showItems = () => {
        return items.map((item, i) => {
            return element(item, i);
        })
    }

    return (
        <>
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <h2 className="text-uppercase text-center text-secondary">Portfolio</h2>
                    <hr className="star-dark mb-5" />

                    <div className="row">
                        {showItems()}
                    </div>

                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                    >
                        <CloseCircleOutlined 
                            onClick={closeModal}
                            className="pull-right pb-5"
                            style={{fontSize: '30px', color: '#ff6666', marginRight: '0'}}
                        />

                        <h2 className="text-center text-white p-5">{clickedItem.name}</h2>

                        {clickedItem.videoLink != '' ? 
                            <iframe 
                                width="100%" 
                                height="40%" 
                                src={clickedItem.videoLink}
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        :
                            null
                        }

                        <div className="pt-3" style={{display:"flex", justifyContent: 'center'}}>
                            <a className="btn btn-outline-light text-center btn-social rounded-circle" role="button" href={clickedItem.github} target="_blank" rel="noreferrer noopener">
                                <i className="fa fa-github fa-fw"/>
                            </a>
                            <h2 className="px-2 pt-2 text-white">Github</h2>
                        </div>

                        {clickedItem.videoLink != '' ?
                            <div className="pt-3" style={{display:"flex", justifyContent: 'center'}}>
                                <a className="btn btn-outline-light text-center btn-social rounded-circle" role="button" href={clickedItem.videoLink} target="_blank" rel="noreferrer noopener">
                                    <i className="fa fa-youtube fa-fw" />
                                </a>
                                <h2 className="px-2 pt-2 text-white">Youtube</h2>
                            </div>
                        :
                            null
                        }


                        <hr className="star-light"/>
                       
                       {modalIsOpen ?
                        <>
                            <div className="row">
                                <div className="col" style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="text-white">
                                        <h2 style={{border: '3px solid #ccc', borderRadius: '25px', padding: '10px'}}>Technology</h2>
                                        {clickedItem.technology.map( (item) => {
                                            return <h5>{item}</h5>
                                        })}
                                    </div>
                                </div>
                                <div className="col" style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="text-white boder">
                                        <h2 style={{border: '3px solid #ccc', borderRadius: '25px', padding: '10px'}}>Language</h2>
                                        {clickedItem.language.map( (item) => {
                                            return <h5>{item}</h5>
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div style={{display:'flex', justifyContent: 'center'}}>
                                <p className="text-white pt-5" style={{width:'50%'}}>{clickedItem.body}</p>
                            </div>
                        </>
                        :
                            null
                        }

                    </Modal>
                </div>
            </section>
        </>
    )
}

export default Portfolio;