import React, { useState } from 'react'

const Kolo = () => {
    const [mode, setMode] = useState(true)

    function handleMode() {
        setMode(!mode)
    }
  return (
    <div>
         <div className='ingeneral'>
            <div className={mode ? 'light' : 'dark'}>
                <p>
                </p>
                <button onClick={handleMode} >{mode? 'Dark Mode': 'Light Mode'}</button>
            </div>
        </div>
    </div>
  )
}

export default Kolo