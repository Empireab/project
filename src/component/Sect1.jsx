import React, { useState } from 'react'

function Sect1() {
    const[name, setName] =useState('')
  return (
    <>
   
        <div className='SecA'>
           <h1>🎭 Welcome to Joke Central</h1> 
           <p>Your favorite collection of programming and teck jokes!</p>
           <h5>Enter your name to get started</h5>
          <input type="text" placeholder='Your name here...' value={name} onChange={(e)=>{
            setName(e.target.value)

          }}/>
         {name ? <span className='input-value'>hello, {name}! 👋 </span> : null}
        </div>

        <div className='funny'>
            <div className='funny1'>
                <span>😂</span>
                <h5>Funny Jokes</h5>
                <p>Discover hilarious programming and tech jokes</p>
            </div>
            <div className='funny1'>
                <span>💻</span>
                <h5>Tech Humor</h5>
                <p>Perfect for developers and tech enthusiasts</p>
            </div>
            <div className='funny1'>
                <span>🎉</span>
                <h5>Daily Laughs</h5>
                <p>Get your daily dose of coding humor</p>
            </div>
            
        </div>
        <h2 className='ready'>{name ? `Ready for some laugh, ${name}?`: `Ready to Laugh?`}</h2>
  
        <button className='view'>View All Jokes  →</button>
        <div className='total'> <p>Total Jokes Available: 10</p></div>
        <p className='jocks'>Jocks</p>
        <div className='all'>
          <h1>{name ? `${name}'s Joke Collection` : `All Jokes`}</h1>
          <p>{name ? `Hey ${name}! Browse through our collection of 10 hilarious jokes` : `Browse through our collection of 10 hilarious jokes`}</p>
        </div>

       
    </>
  )
}

export default Sect1