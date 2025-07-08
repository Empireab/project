import React from 'react'

function Sec2() {
  const jokes = [
    {
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
    },
    {
      setup: "Why did the student eat his homework?",
      punchline: "Because his teacher told him it was a piece of cake!",
    },
    {
      setup: "Why do programmers prefer dark mode?",
      punchline: "Because light attracts bugs!",
    },
    {
      setup: "Why did the computer get cold?",
      punchline: "Because it forgot to close Windows.",
    },
    {
      setup: "Why was the math book sad?",
      punchline: "Because it had too many problems.",
    },
    {
      setup: "Why did the developer go broke?",
      punchline: "Because he used up all his cache.",
    },
    {
      setup: "Why do Java developers wear glasses?",
      punchline: "Because they don't see sharp.",
    },
    {
      setup: "Why was the cell phone wearing glasses?",
      punchline: "Because it lost its contacts.",
    },
    {
      setup: "Why did the function stop calling?",
      punchline: "Because it had too many arguments.",
    },
    {
      setup: "What's a programmer's favorite hangout place?",
      punchline: "The Foo Bar.",
 },

 ];
  return (

    <>
    <div className='wrapper'>
    {jokes.map((items, index)=>{
console.log(items.punchline)
return(
    <>
 
    <div className='map-container'>
        <p><strong>Setup: </strong>  <br /><br />{` ${items.setup}`}</p>
        <div className='punch'>
            <p> <strong>Punchline: </strong> <br /><span className='line'>{` ${items.punchline}`}</span></p>
        </div> <br />
        <span> <center className='index'>Joke#{index+1}</center></span>
       
    </div>

    </>
)
    })}
     </div>
        <button className='back'>← Back to Home</button>
    </>
   
  )
}

export default Sec2