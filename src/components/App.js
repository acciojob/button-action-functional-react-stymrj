import React, { useState } from 'react'

const App = () => {
  const[show, setshow] = useState(false)
  return (
    <div id='main'>
      {!show ? (<button id='click' onClick={() =>
        setshow(true)
      }>Click</button>):(<p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>)}
      
    </div>
  )
}

export default App