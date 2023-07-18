import { useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const person = {}
 
const Regitser = ({register}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name , setName] = useState('')
    const [conPassword, setConPassword] = useState('')
    const [alert, setAlert] = useState('sign Up to your')
    const [color, setColor] = useState('')  

    const signUp = (e)=>{
     e.preventDefault()
        
        if(conPassword !==password){
            setAlert('confirmed password doesn"t matched')
            setColor('red')
        }
         else{
        person.name = name
        person.email = email
        person.password = password
        person.conPassword = conPassword
        console.log(person)
        register(person)
         }
      

        
    }

  return (
    <div>
       
        <div className="container">
    <form onSubmit={(e)=>signUp(e)} className="form">
<div className="form-title">
<span className={color}>{alert}</span>
</div>
<div className="title-2">
<span>SPACE</span>
</div>
<div className="input-container">
<input className="input-mail" value={name} onChange={(e)=>setName(e.target.value)}  type="text" placeholder="Enter your name" />
<span> </span>
</div>
<div className="input-container">
<input className="input-mail" value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="Enter email" />
<span> </span>
</div>
<section className="bg-stars">
<span className="star" />
<span className="star" />
<span className="star" />
<span className="star" />
</section>
<div className="input-container">
<input className="input-pwd" value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Enter password" />
</div>
<div className="input-container">
<input className="input-pwd"  value={conPassword} onChange={(e)=>setConPassword(e.target.value)}  type="password" placeholder="Confirm password" />
</div>
<button  className="submit">
<span  className="sign-text">Sign up</span>
</button>
<p className="signup-link">
have account?
<Link  to={'/login'} className="up">
  Sign In!
</Link>
</p>
</form>

</div>
    </div>
  )
}



Regitser.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Regitser