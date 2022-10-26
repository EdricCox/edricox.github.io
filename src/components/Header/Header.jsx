import React from 'react'
import './header.css'
import ME from '../../images/me.png'
import {BsFillHeartFill, BsGithub, BsFacebook, BsLinkedin} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'

const Header = () => {
  return (
    <header>
      <div className="container col-6 header__container">
        <div className="text-header">
          <h5>Hello I'm</h5>
          <h1>Tran Dinh Nhat</h1>
          <p className='text-note'>I'm a Front End Developer based in VietNam</p>
        </div>
        <div className="me">
            <img src={ME} alt="me" />
        </div>
      </div>
      <div className="container col-6 objective">
        <h5>Objective</h5>
        <p className="text-objective">As a Front-End student, I have been trained
        in front end skills to build a user-friendly
        website interface, and other skills such as
        self-study, teamwork, creativity and logic. I
        always hoped to find an internship position
        suitable for my abilities and my passion
        from that i hope to have the opportunity to
        work for a long time at your company</p>
        </div>
      <div className="container col-6 objective">
        <h5>I <BsFillHeartFill className="icon-like" /></h5>
        <p className="text-objective">I like soccer, calligraphy, photography, guitar, bamboo flute, swimming,...</p>
      </div>
      <div className="container col-6 on_the-web">
        <h5>On The Web</h5>
          <p> <BsGithub className="on_web-icon" /> @EdricCox</p>
          <p> <BsFacebook className="on_web-icon"/> @Facebook</p>
          <p> <RiInstagramFill className="on_web-icon" /> @Instagram</p>
          <p> <BsLinkedin className="on_web-icon"/> @Linkedin</p>
      </div>
    </header>
  )
}

export default Header
