import React, { useState } from 'react';
import axios from 'axios'


const CreateMemoir = () => {

  const statusType = {
    pending: 'Pending',
    resolved: 'Resolved',
    rejected: 'Rejected'
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createDate, setCreateDate] = useState('');
  // eslint-disable-next-line
  const [response,setResponse] = useState(null);
  const [status, setStatus] = useState(statusType.pending);
  const [error, setError] = useState(null);

  const handleTitle = e => setTitle(e.target.value);
  const handleDescription = e => setDescription(e.target.value);
  const handleDate = e => setCreateDate(e.target.value);

  const clearState = () => {
    setTitle('');
    setDescription('');
    setCreateDate('');
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    const payLoad = {
      title,
      description,
      date:createDate
    };
    const url = 'http://localhost:4000/api/v1/todos';
    const accessToken = localStorage.getItem('token');
    const reqOptions = {
      headers: {
        'Authorization': `${accessToken}`,
        'Content-Type': 'application/json'
      }
    };
    axios.post(url, payLoad,reqOptions)
    .then(res => {
      setResponse(res);
      setStatus(statusType.resolved);
      clearState();
    })
    .catch(err => {
      setError(err);
      setStatus(statusType.rejected);
    });
    
  }

  if(status === statusType.rejected) {
    return <p className="text-center text-xl mx-auto mt-64">{error.response.data.message}</p>;
  }

  return (
    <div className="px-12 max-w-md mx-auto mt-24">
      <div className="w-full">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="border-b border-b-2 border-teal-500 py-2">
            <input value={title} onChange={handleTitle} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Ttitle" aria-label="Title"/>
          </div>
          <div className="border-b border-b-2 border-teal-500 py-2">
            <textarea value={description} onChange={handleDescription} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Description" aria-label="Description"></textarea>
          </div>
          <div className="border-b border-b-2 border-teal-500 py-2">
            <input value={createDate} onChange={handleDate} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="date" placeholder="Date" aria-label="Date" required/>
          </div>
          <button className="uppercase mt-2 w-full bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm font-bold border-4 text-white py-1 px-2 rounded" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateMemoir

