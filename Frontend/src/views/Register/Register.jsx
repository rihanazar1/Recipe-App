import React, { useState } from 'react'

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (event) =>{
        event.preventDefault();
    }

  return (
   <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Username' 
        value={username}
        onChange={(e) => {
            setUsername(e.target.value)
            console.log(e.target.value)}}
        required />

        <input 
        type="text" 
        placeholder='Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required />

        <input 
        type="password" 
        placeholder='Password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required/>

        <button type='submit'>Register</button>
   </form>
  )
}

export default Register