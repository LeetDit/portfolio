import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const items = [
      {
        type: 'Programming Language',
        body: ['Python', 'C', 'Java', 'Javascript', 'MIPS', 'Scala'],
        img: 'assets/img/skills/language.jpg',
      },
      {
        type: 'Web Development',
        body: ['React', 'Django', 'MERN Stack', 'HTML / CSS', 'REST APIs', 'Node'],
        img: 'assets/img/skills/webdev.jpg',
      },
      {
        type: 'Database',
        body: ['SQLite', 'MySQL', 'MongoDB', 'PostgreSQL', 'elasticsearch'],
        img: 'assets/img/skills/database.jpg',
      },
      {
        type: 'Mobile Development',
        body: ['React Native', 'Android Development'],
        img: 'assets/img/skills/mobile.jpg',
      },
      {
        type: 'Computer Vision',
        body: ['openCV'],
        img: 'assets/img/skills/vision.jpg',
      },
      {
        type: 'Information Visualization',
        body: ['d3.js', 'Matplotlib'],
        img: 'assets/img/skills/info.jpg',
      },
      {
        type: 'Version Control',
        body: ['Git'],
        img: 'assets/img/skills/version.jpg',
      },
      {
        type: 'Operating Systems',
        body: ['MacOS', 'Windows', 'Linux'],
        img: 'assets/img/skills/os.jpg',
      }
    ]

    const element = (item, i) => (
      <div className="card" style={{ width: '15rem', borderRadius: '25px'}}>
        <img className="p-3" style={{borderRadius: '60px'}} src={item.img} />
        <div className="card-body text-center">
          <h5 className="card-title" style={{color: 'black'}}>{item.type}</h5>
        </div>
        <ul className="list-group list-group-flush text-center" style={{borderRadius: '25px'}}>
          {item.body.map( (item) => {
            return <li className="list-group-item">{item}</li>
          })}
        </ul>
      </div>
    )

    const showItems = () => {
      return items.map( (item, i) => {
        return element(item, i);
      })
    }

    return (
        <>
            <section id="skills" className="text-white bg-primary mb-0">
                <div className="container">
                    <h2 className="text-uppercase text-center text-white">Technical Skills</h2>
                    <hr className="star-light mb-5"></hr>
                    <Carousel 
                      responsive={responsive}
                      swipeable={true}
                      showDots={true}
                      ssr={true}
                      infinite={true}
                      autoPlay={false}
                      keyBoardControl={true}
                      containerClass="carousel-container"
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"
                    >
                      {showItems()}
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Skills;