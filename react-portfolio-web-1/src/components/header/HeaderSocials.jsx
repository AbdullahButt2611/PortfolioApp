import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://react-icons.github.io/react-icons/search?q=linkedin" target="_blank"><BsLinkedin /></a>
        <a href="https://react-icons.github.io/react-icons/search?q=linkedin" target="_blank"><BsGithub /></a>
        <a href="https://react-icons.github.io/react-icons/search?q=linkedin" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials