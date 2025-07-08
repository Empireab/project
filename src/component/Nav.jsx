import React, { useEffect, useState } from 'react'


function Nav() {
    const [active, setActive]= useState('true');
    const [body, setBody] = useState('light')

    useEffect(()=>{
      document.body.classList.add('body2');
    },[]);
    
    const togglebg = ()=>{
     if (body === 'light') {
      document.body.classList.remove('body2')
      document.body.classList.add('body1')
      setBody('dark')
      
     } else{
      document.body.classList.remove('body1')
      document.body.classList.add('body2')
      setBody('light')
     }
    }
   

    

  return (
    < >
    
   <div className='navbar'>
    <div className='joke'>
         <h1 className='nav-text'>🎭 Joke App</h1>
          <div>
          <button className={`btn ${active === 'true' ? 'home' : 'jokes'}`} onClick={()=>{setActive ('true')}}>Home</button>
          <button className={`btn ${active==='false' ? 'home' : 'jokes'}`} onClick={()=>{setActive ('false')}}>Jokes</button>
     </div>
         </div> 
    
     
  
   <button className={`but ${body === 'light' ?'btn1' : 'btn2'}`} onClick={togglebg}>{body ==='light' ? '🌙dark' : '☀️light'}</button>

   </div>
    </>
   
  )
}

export default Nav