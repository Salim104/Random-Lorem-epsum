import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);

 const handleSubmit =(e) => {
    e.preventDefault();
    let amount = parseInt(count);

    if(amount < 0){
      setText(data.slice(0,1))
      setCount(0)
    }else if(amount > 8){
       setText(data.slice(0,1))
       setCount(0)
    }else{
    setText(data.slice(0,amount));
    setCount(0)
    }
 }
  return (
  <section className='section-center'>
    <h3>Tired of boring the Lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>
        paragraphs:
      </label>
      <input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)}></input>
      <button type='submit' className='btn'>generate</button>
    </form>
    <article className='lorem-text'>
      <article>
        {text.map((item,index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </article>
  </section>
    )
}

export default App;
