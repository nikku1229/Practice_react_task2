import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const addElement = ()=>{
    setCount(count+1);

    if(count >= 20){
      setCount(20);
      document.querySelector('.alert').innerText = `You can't add any more!!`;
    }
    else{
      document.querySelector('.alert').innerText = '';
    }
  }

  const subElement = ()=>{
    if(count){
      setCount(count-1);
      document.querySelector('.alert').innerText = '';
    }
    else if(count <= 0){
      setCount(0);
      document.querySelector('.alert').innerText = `You can't subtract any more!!`;
    }
    else{
      setCount(0)
      document.querySelector('.alert').innerText = `You can't subtract any more!!`;
    }
  } 

  return (
    <>
      <h1>Button Clicker</h1>

      <div className="btn-div">
        <button onClick={addElement}>Add 1</button>
        <button onClick={subElement}>Subtract 1</button>
      </div>

      <p>Count: {count}</p>
      <p className='alert'></p>
    </>
  )
}

export default App
