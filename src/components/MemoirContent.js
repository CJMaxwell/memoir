import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import Sidebar from './Sidebar';
import NewMemoirButton from './NewMemoirButton';

const MemoirContent = () => {

  const statusType = {
    pending: 'Pending',
    resolved: 'Resolved',
    rejected: 'Rejected'
  };

  const id = useParams();
  const history = useHistory();
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState(statusType.pending);
  const [error, setError] = useState(null);


  const accessToken = localStorage.getItem('token');

  const url = `http://localhost:4000/api/v1/todos/${id.id}`;
  const reqOptions = {
    headers: {
      'Authorization': `${accessToken}`,
      'Content-Type': 'application/json'
    }
  };

  useEffect(() => {
    axios.get(url, reqOptions)
      .then(res => {
        setResponse(res.data.todoItem);
        setStatus(statusType.resolved);
      })
      .catch(err => {
        setError(err);
        setStatus(statusType.rejected);
        if(status === statusType.rejected) {
          return <p className="text-center text-xl mx-auto mt-64">{error}</p>
        }
      })
  });

  if(!response && (status === statusType.pending)) {
    return <h1 className="text-center text-6xl mx-auto mt-64">Loading...</h1>
  };

  const { title, description, date, completed } = response;

  const publishedOn = new Date(date)
  const dateFormat = publishedOn.toDateString();
  const dateArray = dateFormat.split(' ');
  const weekday = `${dateArray[0]}`;
  const day = `${dateArray[2]}`;

  const handleClick = () => {
    const token = localStorage.getItem('token');
    const url = `http://localhost:4000/api/v1/todos/${id.id}`;
    const reqOptions = {
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
      }
    };
    
    axios.delete(url, reqOptions)
      .then(res => {
        setResponse(res);
        setStatus(statusType.resolved);
        history.push('/dashboard');
      })
      .catch(err => {
        setError(err);
        setStatus(statusType.rejected);
      });
    
    if(status === statusType.rejected) {
      return <p className="text-center text-xl mx-auto mt-64">{error}</p>
    };
  }
  
  return (
    <div className="max-w-full max-h-screen h-screen flex px-8 overflow-hidden">
      <div className="w-1/6 pr-4 mt-2">
        <div className="w-full">
          <div className="ml-6">
            <NewMemoirButton />
          </div>
          <Sidebar />
        </div>
      </div>
      <div className="w-5/6">
        { 
          <div className="flex px-8 bg-white py-6 shadow-lg rounded-lg mt-4 flex-wrap">
          <div className="w-1/6">
            <p className="font-semibold text-xl uppercase">{weekday}</p>
            <span className="font-bold text-6xl">{day}</span>
            <div className="flex">
              <svg className="h-5 w-5 pr-2" aria-hidden="true" data-prefix="fal" data-icon="calendar-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"/>
              </svg>
              <span className="text-gray-600">2.55p.m</span>
            </div>
          </div>
          <div className="w-5/6">
            <header className="flex justify-between items-center">
              <h4 className="font-semibold text-2xl leading-tight truncate">{title}</h4>
              <span>
                <button onClick={handleClick} className="mr-4 outline-none hover:text-red-600 text-gray-500">Delete</button>
                <button disabled={completed} className="bg-teal-600 px-6 py-1 rounded text-white">Done</button>
              </span>
            </header>
            <p className="mt-2 text-gray-800">{description}</p>
            
          </div>
        </div> 
        }
      </div>
    </div>

   
  )
}

export default MemoirContent

