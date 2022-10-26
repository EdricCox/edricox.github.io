import React from 'react'
import './work.css'
import work1 from '../../images/e-project-1.png'
import work2 from '../../images/e-project-2.png'
import work3 from '../../images/e-project-3.png'
import work4 from '../../images/e-project-4.png'
import work5 from '../../images/e-project-5.png'
import work6 from '../../images/e-project-6.png'
import work7 from '../../images/e-project-7.png'

import { Pagination } from 'swiper';

import { Swiper , SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    Images : work1
  },
  {
    Images : work2
  },
  {
    Images : work3
  },
  {
    Images : work4
  },
  {
    Images : work5
  },
  {
    Images : work6
  },
  {
    Images : work7
  },
]

const Work = () => {
  return (
    <section id='experience'>
        <h5>Work Experience</h5>
        <h6 className="container-fluid text-center e-projective">E-Project of Hindi</h6>

        <Swiper className="container experience__container"
        /**install swiper modules */ 
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}>
          {
            data.map(({Images},index) => {
              return (
                <SwiperSlide key={index} className="experience">
                  <div className="client__work">
                    <img src={Images} />
                  </div>
                </SwiperSlide>
              )
            }) 
          }
        </Swiper>
        <div className="container col-md-6 content__experience">
          <p>During my study at <a className="content_link" href="https://aptechsaigon.edu.vn/?gclid=Cj0KCQjwteOaBhDuARIsADBqRejKaz_PjCHCpz2H-Hc4gQbJupeMXd0ND3ISjwcD8OkKR3abWust9SYaAi9xEALw_wcB">Aptech Saigon</a>, my friends and I, under the enthusiastic guidance of our teachers, created the interface for a watch business website called Alberto Clock. We use framework Reactjs and programming languages like HTML, CSS, JavaScript</p>
        </div>
    </section>
  )
}

export default Work

