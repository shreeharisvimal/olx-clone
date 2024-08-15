import React,  { useState, useContext }from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { FireBaseContext, AuthContext } from '../../Components/store/FireBasecontext';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { Firebase } = useContext(FireBaseContext);
  const navigate  = useNavigate();
  const {user} = useContext(AuthContext)

  const handleLogin =(e)=>{
    e.preventDefault()
    Firebase.auth().signInWithEmailAndPassword(email, password).then((result)=>{
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="femail"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lpass"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=> navigate('/signin')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
