import React from 'react'
import seven from './assets/project7.png'
import one from './assets/project1.png'
import two from './assets/project2.png'
import thre from './assets/project3.png'
import four from './assets/project4.png'
import five from './assets/ptoject5.png'
import six from './assets/project6.png'
import eigth from './assets/project8.png'

const God = () => {
    return (
        <div className='' id='kl'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6"  >
                        <img src={one} alt="" id='ji' />
                    </div>
                    <div className="col-md-6" >
                        <img src={two} alt="" id='ji' />
                    </div>
                </div>
            </div>
            <br />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6"  >
                        <img src={thre} alt="" id='ji' />
                    </div>
                    <div className="col-md-6" >
                        <img src={four} alt="" id='ji' />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6"  >
                        <img className='imm' src={five} alt=""  id='ji' />
                    </div>
                    <div className="col-md-6" >
                          <img className='imm' src={six} alt="" id='ji' />
                    </div>
                </div>
            </div>

            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6"  >
                    <img className='imm' src={seven} alt="" id='ji' />
                    </div>
                    <div className="col-md-6" >
                    <img className='imm' src={eigth} alt="" id='ji' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default God