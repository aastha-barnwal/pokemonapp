import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/counter/authSlics';



const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch(); // to use redux state function

  const navigate = useNavigate(); // navigate to other url

  // set username
  const handleUsernameChange = (e)=>{
    setUsername(e.target.value);
    
  }
  //set password
  const handlePasswordChange = (e)=>{
    setPassword(e.target.value);
    
  }
  // when login form submitted
  const submitHandler = (e)=>{
    e.preventDefault();
    try{
      dispatch(login({ username, password })); // user authentication action
      navigate(`/auth/:${username}`);
    }catch(err){
      navigate('/register'); //if credentials doesn't match
    }
    
  }
  //navigate to register
  const goToRegister = ()=>{
    navigate('/register');
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder='Username'
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div className="mt-3">
        <p className="d-inline">Don't have an account? </p>
        <button className="btn btn-secondary ms-2" onClick={goToRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
