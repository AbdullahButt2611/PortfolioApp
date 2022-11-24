import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>13+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Completed Projects</small>
            </article>

          </div>

          <p>
          As a web and software developer, I try to have keen analytical skills to create a variety of successful websites. I am someone who is responsible for their design and construcution. And someone, who ensure that applications meet user expectations by ensuring they look good, run smoothly and offer easy access points. I have also created an extension for the chrome browser. As a seasoned and forward-looking full-stack web and software developer, I have experience in the design, development, testing, and maintenance of websites. Equipped with a diverse and promising skill set, I have expertise in programming, and in-depth knowledge of developer tools and languages. I am driven in thinking outside the box to find unique solutions to difficult problems. Committed to consistency and transparency, dedicated to continuous development, and energized by a challenge.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About