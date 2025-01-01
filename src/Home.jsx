import React from 'react'
import image from './assets/mice.png'
import country from './assets/nigeria.png'
import student from './assets/studies.png'
import email from './assets/email.png'
import tg from './assets/email.png'

const Home = () => {
    return (
        <div>
            {/* <img src={tg} alt="" /> */}
            <div className='ist'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='ndp'>
                    <h3>HI, i am Omidire Oluwamayowa.E </h3>
                    <p>I am a Front-End Developer</p>
                    <ul className='ul2'>
                        <li><img src={country} alt="" />BASE IN NIGERIA</li>
                        <br />
                        <li><img src={student} alt="" />STUDENT AT VALUEMAX</li>
                        <br />
                        <li><img src={email} alt="" />omidireoluwamayowa@gmail.com</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home