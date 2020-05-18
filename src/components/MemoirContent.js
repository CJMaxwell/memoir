import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Sidebar from './Sidebar';
import NewMemoirButton from './NewMemoirButton';

const MemoirContent = () => {

  const id = useParams();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      })
  });
  
// console.log(response.title);

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
        { loading ? <h1 className="text-center text-6xl mx-auto mt-64">Loading...</h1>:
          <div className="flex px-8 bg-white py-6 shadow-lg rounded-lg mt-4 flex-wrap">
          <div className="w-1/6">
            <p className="font-semibold text-xl uppercase">Tue</p>
            <span className="font-bold text-6xl">19</span>
            <div className="flex">
              <svg className="h-5 w-5 pr-2" aria-hidden="true" data-prefix="fal" data-icon="calendar-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"/>
              </svg>
              <span className="text-gray-600">2.55p.m</span>
            </div>
          </div>
          <div className="w-5/6">
            <header className="flex justify-between items-center">
              <h4 className="font-semibold text-2xl leading-tight truncate">{response.title}</h4>
              <span>
                <button className="mr-4 text-gray-500">Delete</button>
                <button className="bg-teal-600 px-6 py-1 rounded text-white">Done</button>
              </span>
            </header>
            <p className="mt-2 text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente soluta ducimus delectus harum. Mollitia officiis aspernatur debitis sequi beatae iure fugit atque corporis vel odit consequatur necessitatibus nostrum molestias consectetur in numquam explicabo a harum, cumque dolores reprehenderit. Earum error iste consequatur dignissimos atque suscipit facilis itaque temporibus deserunt corporis, doloremque neque quam aliquam debitis sed qui tempora beatae a esse laudantium asperiores sapiente illum optio? Exercitationem, esse provident ipsam architecto officia aliquid nemo quis ipsa earum optio blanditiis sunt ea animi, fugiat reprehenderit? Quam vero in nesciunt deleniti possimus obcaecati eos est officia error nihil quisquam porro, illum reiciendis!</p>
            
          </div>
        </div> 
        }
      </div>
    </div>

   
  )
}

export default MemoirContent
