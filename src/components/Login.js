
import React, { useEffect, useState } from 'react';

import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  // const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to decode and access JWT data
  const decodeJWTData = () => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
          // Decode the JWT token to access the payload
          const decodedToken = jwtDecode(token);
          // setUserData(decodedToken);
          const role =decodedToken.role;
          const email =decodedToken.email;
          console.log('User Role:', role);
          console.log('User email:', email);

          localStorage.setItem('role', role);
          localStorage.setItem('email', email);
          
      } catch (error) {
        console.error('Token error:', error);
      }
    }
  };
  // Call decodeJWTData when the component is mounted
  useEffect(() => {
    decodeJWTData();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('isAuthenticated')) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/api/v1/auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem("isAuthenticated",true)
        // Decode and access JWT data
        decodeJWTData();
        navigate('/app');
      } else {
        navigate('/');
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
    }
  };

  const handleSignup = () => {
    
    navigate('/sigup');

   
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-1/3 h-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="relative z-0 w-full mb-6 group mt-16">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Email address</label>
      </div>





    <div class="relative z-0 w-full mb-6 group mt-16">
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}   name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
</div>

  <div className="grid grid-cols-2 gap-4 mt-8">
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Login
    </button>

    <button
    onClick={handleSignup}
      type="button"
      className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
    >
      Sign Up
    </button>
    </div>
      </form>


    </div>
  )
}

export default Login
