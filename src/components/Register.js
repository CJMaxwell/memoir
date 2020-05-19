import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const statusType = {
    pending: 'Pending',
    resolved: 'Resolved',
    rejected: 'Rejected'
  };

  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState(statusType.pending);
  const [error, setError] = useState(null);

  const handleFirstName = e => setFirstName(e.target.value);
  const handleLastName = e => setLastName(e.target.value);
  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);


  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password
    };
    const url = 'http://localhost:4000/api/v1/auth/signup';
    const reqOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    axios.post(url, user, reqOptions)
      .then(res => {
        setResponse(res);
        setStatus(statusType.resolved);
        if(res.status === 201) {
         localStorage.setItem('token', `Bearer ${res.data.token}`);
         history.push('/dashboard');
        }
      })
      .catch(err => {
        setError(err);
        setStatus(statusType.rejected);
        if(status === statusType.rejected) {
          return <p className="text-center text-xl mx-auto mt-64">{error}</p>
        };

      })
  }


  return (
    <div className="px-12 max-w-md mx-auto mt-24">
      <div className="w-full">
        <img className="rounded-md  h-48 object-cover object-center shadow-lg w-full" src="../img/my-life-journal.jpg" alt="Woman paying for a purchase"/>
      </div>
      <div className="w-full">
        <div className="mt-2 tracking-wide text-sm text-teal-500 font-bold">Let's remind you any time, any day, any where.</div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="border-b border-b-2 border-teal-500 py-2">
            <input onChange={handleFirstName} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="First Name" aria-label="First Name"/>
          </div>
          <div className="border-b border-b-2 border-teal-500 py-2">
            <input onChange={handleLastName} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Last Name" aria-label="Last Name"/>
          </div>
          <div className="border-b border-b-2 border-teal-500 py-2">
            <input onChange={handleEmail} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" aria-label="Email" required/>
          </div>
          <div className="border-b border-b-2 border-teal-500 py-2">
            <input onChange={handlePassword} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Password" aria-label="Password" required/>
          </div>
          <button className="uppercase mt-2 w-full bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm font-bold border-4 text-white py-1 px-2 rounded" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
