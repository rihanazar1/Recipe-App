import React, { useState } from 'react'
import "../Register/Register.css"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { setUser } from '../../redux/features/user/user.feature'
import { useSelector, useDispatch } from 'react-redux'


const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = async (event) =>{
        event.preventDefault();

       const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/register`,{
            username, email, password
        },{
            withCredentials: true
        })

        dispatch(setUser({
            username: response.data.user.username,
            email: response.data.user.email
        }))

        navigate('/home')
    }

  return (
   <div className='auth-section'>
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
   </div>
  )
}

export default Register