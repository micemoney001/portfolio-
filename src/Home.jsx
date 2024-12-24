import React from 'react'
import image from './assets/mice.png'

const Home = () => {
    return (
        <div>
            <div className='ist'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h3>HI, i am Omidire Oluwamayowa.E </h3>
                    <p>I am a Front-End Developer</p>
                    <ul className='ul2'>
                        <li>BASE IN NIGERIA</li>
                        <li>STUDENT AT VALUEMAX</li>
                        <li>omidireoluwamayowa@gmail.com</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home