import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/p1.png"
import IMG2 from "../../assets/p2.png"
import IMG3 from "../../assets/p3.png"
import IMG4 from "../../assets/p4.png"
import IMG5 from "../../assets/p5.png"


// Inserting Data through this array into the cards
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Spotify Clone',
    github: 'https://github.com/AbdullahButt2611/Projects/tree/main/Web%20Applications/Spotify%20Clone',
    demo: '#'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Jazz Cash App',
    github: 'https://github.com/AbdullahButt2611/Jazz-App',
    demo: 'https://github.com/AbdullahButt2611/Jazz-App/blob/main/README.md'
  },
  {
    id: 3,
    image: IMG3,
    title: 'AIC Website',
    github: 'https://github.com/AbdullahButt2611/AIC-Website',
    demo: '#'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Stance DJ - Blogging Site',
    github: 'https://github.com/AbdullahButt2611/StanceDJ',
    demo: 'http://stancedj.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'MAx Designs - Web Application',
    github: 'https://github.com/AbdullahButt2611/MaxDesigns',
    demo: 'https://max-designs.herokuapp.com/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
              return(
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="cta">
                    <a href={github} className='btn' target="_blank">Github</a>
                    <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                  </div>
                </article>
              )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio