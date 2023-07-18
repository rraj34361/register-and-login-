
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from'prop-types'

let person = {

}


const Login = ({login}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e)=>{
    e.preventDefault()
       person.email = email
       person.password = password
          // setEmail('')
          // setPassword('')
       login(person)
   }



  return (
    <div>
     
      <div className="container">
        <form onSubmit={handleLogin} className="form">
  <div className="form-title">
    <span>sign in to your</span>
  </div>
  <div className="title-2">
    <span>SPACE</span>
  </div>
  <div className="input-container">
    <input className="input-mail" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
    <span> </span>
  </div>
  <section className="bg-stars">
    <span className="star" />
    <span className="star" />
    <span className="star" />
    <span className="star" />
  </section>
  <div className="input-container">
    <input className="input-pwd" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter password" />
  </div>
  <button  className="submit">
    <span className="sign-text">Sign in</span>
  </button>
  <p className="signup-link">
    No account?
    <Link to={'/register'} className="up">
      Sign up!
    </Link>
  </p>
</form>

    </div>
    </div>
  )
}

Login.propTypes = {
  login : PropTypes.func.isRequired
}

export default Login