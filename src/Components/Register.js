// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { register } from '../redux/counter/authSlics';

// const Register = () => {
    
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const dispatch = useDispatch();
//     const navigate = useNavigate(); 

  
//     // set username
//     const handleUsernameChange = (e)=>{
//       setUsername(e.target.value);
//     }
//     // set password
//     const handlePasswordChange = (e)=>{
//       setPassword(e.target.value);
//     }

//     // user click to register 
//     const submitHandler = (e)=>{
//       try{
//         e.preventDefault();
//         dispatch(register({ username, password }));
//         navigate('/login');
//       }catch(err){
//         navigate('/register');
//       }
        
//     }
//     // navigate to login
//     const goToLogin = ()=>{
//       navigate('/login');
//     }

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Register</h2>
//       <form onSubmit={submitHandler}>
//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">Username:</label>
//           <input
//             type="text"
//             id="username"
//             className="form-control"
//             name="username"
//             value={username}
//             placeholder='Username'
//             onChange={handleUsernameChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password:</label>
//           <input
//             type="password"
//             id="password"
//             className="form-control"
//             name="password"
//             value={password}
//             placeholder='Password'
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Register</button>
//       </form>
//       <div className="mt-3">
//         <p className="d-inline">Don't have an account? </p>
//         <button className="btn btn-secondary ms-2" onClick={goToLogin}>
//           Login
//         </button>
//       </div>    </div>
//   );
// };
// export default Register



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../redux/counter/authSlics';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle username change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(register({ username, password }));
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  // Navigate to login
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Register</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleUsernameChange}
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
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <div className="mt-3">
        <p className="d-inline">Already have an account? </p>
        <button className="btn btn-secondary ms-2" onClick={goToLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
