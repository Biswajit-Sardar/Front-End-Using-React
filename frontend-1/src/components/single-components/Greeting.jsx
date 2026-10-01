import React from 'react'
import './Greeting.css'

const Greeting = ( ) => {
  return (
    <React.Fragment> 
      <>
      <h1>This is Fragement</h1>
      </>
      <div className="greeting">
      <h1>Hello, World!</h1>
      <p>Welcome to React</p>
      
      
    </div>
    <br />
    <label htmlFor="email">Email</label>
    <input type="email" id='email' />
       </React.Fragment>
    
  )

}

export default Greeting