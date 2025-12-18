import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  
  //let counter = 15;

  const addValue = () =>{
    
    setCounter(prev => (prev < 20 ? prev+1: prev));

  }

  const removeValue = () =>{
    
    setCounter(prev => (prev > 0 ? prev-1: prev));
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      disabled={counter===20}
      >Add Value</button>
      <p style={{color:"red"}}>{counter === 20 && 'Maximum Limit Reached' }</p>
      <br/>
      <button onClick={removeValue} disabled={counter===0}>Remove value</button>
      <p style={{color:"red"}}>{counter === 0 && 'Minimum Limit Reached' }</p>
    </>
  )
}

export default App
