// import React, { useState } from "react";

// const LoginPage = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2 className="title">
//           Welcome to <span>ABC</span>
//         </h2>
//         <p className="subtitle">Where Financial Wisdom Meets Technology</p>
//         <h3 className="login-heading">Log in with your credentials</h3>

//         <label>Username <span className="required">*</span></label>
//         <input type="email" placeholder="Enter your email" required />

//         <label>Password <span className="required">*</span></label>
//         <div className="password-container">
//           <input type={passwordVisible ? "text" : "password"} placeholder="Enter password" required />
//           <span className="show-password" onClick={() => setPasswordVisible(!passwordVisible)}>
//             {passwordVisible ? "Hide" : "Show"}
//           </span>
//         </div>

//         <button className="login-btn">Log in</button>

//         <a href="#" className="forgot-password">Forgot Password</a>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', values);
        if (response.data.msg === 'Login successful') {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          navigate('/home');
        }
      } catch (err) {
        setError(err.response?.data?.msg || 'Login failed');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <h1>Login</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <div>{formik.errors.email}</div>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <div>{formik.errors.password}</div>}
        <button type="submit" disabled={loading}>
          {loading ? <Loader /> : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;