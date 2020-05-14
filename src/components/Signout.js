import React from 'react';
import { useHistory } from 'react-router-dom';


const Signout = () => {

  const history = useHistory();

  const handleOnClick = () => {
    localStorage.removeItem('token');
    history.push('/');
  }
  return (
    <button onClick={handleOnClick} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">Sign Out</button>
  )
}

export default Signout
