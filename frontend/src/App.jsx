 import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Regitser from './components/Regitser'
import Home from './components/Home'
import Navbar from './components/Navbar'
import axios from 'axios'
import { useState } from 'react'
 
function App() {
   const navigate = useNavigate()
 const [LoggedIn, SetLoggedIn] = useState(false)


 const signOut = ()=>{
   navigate('/login')
     localStorage.clear()
     console.log("clear")
     SetLoggedIn(false)
 }

  const register = async (person)=>{
        let data = await axios.post('http://localhost:3000/register', {...person
        })
        console.log(data)
        return data
  }
  const login = async(person)=>{
    let data = await axios.post('http://localhost:3000/login', {...person})
        localStorage.setItem("token" ,data.data.token )
          navigate('/')
    console.log(data.data)
    SetLoggedIn(true)
    return data.data
  }

  return (
      <>
      <Navbar LoggedIn = {LoggedIn} signOut = {signOut}  />
    <Routes>
      <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {  <Login login = {login} />}    />
        <Route path='/register' element = {  <Regitser register  = {register} />}  />
    </Routes>
      </>
  )
}

export default App
