import React from 'react'
import image from './assets/fron.png'
import country from './assets/nigeria.png'
import student from './assets/studies.png'
import email from './assets/email.png'
import tg from './assets/email.png'
import Kolo from './Kolo'

const Home = () => {
    return (
        <div id='ari'>
            {/* <img src={tg} alt="" /> */}
            <div className='ist'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Hey,I'm Emmanuel Omidire</h3>
                            <p>I am a Front-End Developer</p>
                            <p>I build modern and responsible web experiences.</p>
                            <button>View Work</button>
                            <button>Contat me</button>
                        </div>
                        <div className="col-md-6">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className='ndp'>
                    <h3>Hey,I'm Emmanuel Omidire</h3>
                    <p>I am a Front-End Developer</p>
                    <p>I build modern and responsible web experiences.</p>
                    <button>View Work</button>
                    <button>Contat me</button>
                </div>
                <div className='mlpo'>
                   
                </div> */}
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h2>About Me</h2>
                        <p>I'm a passionate Front-End Developer with 2+ year of experiene building responsive and
                            optimized web appliations. I enjoy creating user-friendly,accessible, and visually appealing
                            websites.</p>
                        <button>know more</button>
                    </div>
                    <div className="col-md-6">
                        <h2>Latest Article</h2>
                        <p>Feet free to reach out for collaborations or just a friendly hello?</p>
                        <p>omidireoluwamayowa@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home