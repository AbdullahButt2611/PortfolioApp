import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {BsBriefcase} from 'react-icons/bs'
import {AiOutlineUnorderedList} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" footer__logo>MAB</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/people/Muhammad-Abdullah-Butt/100076291614529/"><FaFacebookF /></a>
        <a href="https://www.instagram.com/abdullah.butt.22/"><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/abdullah-butt2611/"><FaLinkedinIn /></a>
        <a href="https://github.com/AbdullahButt2611"><BsGithub /></a>
        <a href="https://rebrand.ly/MuhammadAbdullahButt_MABCORP"><BsBriefcase /></a>
        <a href="https://rebrand.ly/ProjectDisplayer_MABCORP"><AiOutlineUnorderedList /></a>
      </div>
    </footer>
  )
}

export default Footer