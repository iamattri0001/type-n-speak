import React, { useState } from 'react'
import Form from './Components/Form';
import Hero from './Components/Hero';
import VoiceAnimation from './Components/VoiceAnimation';
function App() {
  const [speaking, setSpeaking] = useState(false);
  return (
    <div className='font-regular bg-dark text-light'>
      <Hero />
      {speaking &&
        <VoiceAnimation />
      }
      <Form setSpeaking={setSpeaking} />
    </div>
  )
}

export default App