import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/p1.png"
import IMG2 from "../../assets/p2.png"
import IMG3 from "../../assets/p3.png"
import IMG4 from "../../assets/p4.png"
import IMG5 from "../../assets/p5.png"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/AbdullahButt2611?tab=repositories" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/AbdullahButt2611?tab=repositories" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/AbdullahButt2611?tab=repositories" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/AbdullahButt2611?tab=repositories" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/AbdullahButt2611?tab=repositories" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/AbdullahButt2611?tab=repositories" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio