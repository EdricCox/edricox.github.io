import React from 'react'
import {BsClipboardCheck} from 'react-icons/bs'
import './information.css'

const Information = () => {
  return (
    <section id='information'>
        <div className="container col-6 container__information">
            <h5 className="text-information">Information</h5>
            <div className="row container_info">
                <div className="col-6 col-md-4">
                    <article className="info">
                            <h6>Education</h6>
                            <h6><a href='https://aptechsaigon.edu.vn/'>Aptech SaiGon<br />
                            Computer Education</a></h6>
                            <small>ITT International Technician</small>
                        </article>
                    </div>
                <div className="col 6 col-md-4">
                    <article className="info">
                        <h6>Technical Skills</h6>
                            <small>
                                <BsClipboardCheck /> HTML<br/>
                                <BsClipboardCheck /> CSS<br />
                                <BsClipboardCheck /> JAVASCRIPT
                            </small>
                    </article>
                </div>
                <div className="col-6 col-md-4">
                    <article className="info">
                        <h6>Soft Skills</h6>
                            <small>
                                <BsClipboardCheck /> Teamwork<br/>
                                <BsClipboardCheck /> Listening and Questioning Skills<br />
                                <BsClipboardCheck /> Time Manager
                            </small>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Information