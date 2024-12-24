import React from 'react'

const Chopingmatt = (props) => {
  return (
    <div> 
        <div className='chop'>
        <div>
            <img src={props.image} alt="" />
        </div>
        <h3>{props.title}</h3>
        <p>
            {props.description}
        </p>
        <div>
            <button>${props.price}</button>
            <button onClick={props.btn}>Delete</button>
        </div>
    </div>
    </div>
  )
}

export default Chopingmatt