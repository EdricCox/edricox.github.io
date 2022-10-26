import React from 'react'
import './contact.css'
import {SiGmail, SiMessenger} from 'react-icons/si'
import {ImPhone} from 'react-icons/im'


const Contact = () => {
  return (
    <section id="contact">
        <div className="container col-6 text-center Contact__main">Contact</div>
        <div className="container col-6 contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <SiGmail className='contact__option-icon' />
                    <h4>Gmail</h4>
                    <h5>temac30041999@gmail.com</h5>
                    <a href=''target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                    <SiMessenger className='contact__option-icon'/>
                    <h4>Messenger of me</h4>
                    <h5>Tran Dinh Nhat</h5>
                    <a href='' target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                    <ImPhone className='contact__option-icon'/>
                    <h4>Phone number</h4>
                    <h5>+84 964 312 808</h5>
                    <a href='' target="_blank">Send a message</a>
                </article>
                {/* End contact options */}
            </div>
            <form action="">
                <input type="text" name='name' placeholder='Your full Name' required />
                <input type="email" name='email' placeholder='Your email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type="text" className='contact__button'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
