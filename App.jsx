import './App.css'
import { useState } from 'react'

function App() {
   
 let [counter, setCounter] = useState(4)
 
 const addValue = () => { 
  counter = counter + 1 
  setCounter(counter)
 }

const removeValue =() => { 
  counter = counter -1
  setCounter(counter)
}

  return (
    <>
      <h1>Rider and Coding</h1>
      <h2>counter value: {counter} </h2>

      <button onClick={addValue}>
        Add value</button>
      <br />

      <button onClick={removeValue} >
        Remove value</button>
    </>
  )
}

export default App
