
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/counter/authSlics';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector((state) => state.auth.error); // Selector for authentication error

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(login({ username, password })); // Await the dispatch action
      if (result.meta.requestStatus === 'fulfilled') {
        navigate(`/auth/${username}`);
      } else {
        navigate('/register'); // Navigate to register if credentials don't match
      }
    } catch (err) {
      console.error('Error during login:', err);
      navigate('/register'); // Navigate to register on error
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

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
            placeholder="Username"
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
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {authError && <div className="alert alert-danger mt-3">{authError}</div>}
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
