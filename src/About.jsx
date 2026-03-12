import React from 'react'
import image from './assets/fron.png'

const About = () => {
    return (
        <div>
            <br /><br />
            <div className='abt1'>
                <h1 id='y'>About Me</h1>
                <h4>
                    Hello! I'm <span id='s'> Emmanuel</span>  -  a passionate <span id='p'>Front-end developer</span> who loves  building clean, efficient, and user-focused digital experiences.
                </h4>
                <p>I specialize in creating modern, responsible, and scalable solutions that help business bring their idea to life.</p>
            </div>

            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={image} alt="" id='d' />
                        </div>
                        <div className="col-md-9">
                            <p id='pi'>My journey into tech  started when i discorved how powerful code can be. <br />Over the years, i've worked on <span id='s'>web applications, personal websites and digital</span> tools</p>
                            <p>I enjoy turning <span id='c'>complex</span> problems into simple, beautiful solutions.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id='n'>
                <h1 id='w'>What I Do</h1>
                <div id='g'>
                    <h1 id='ts'>Development :</h1>
                    <p>.Building fast website</p>
                    <p>.Scalable website</p>
                </div>
            </div>

            <br /><br />

            <div className='abt2'>
                <h3>My Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Github</li>
                    <li>React-js</li>
                </ul>
            </div>
        </div>
    )
}

export default About