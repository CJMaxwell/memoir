import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import MemoirItem from './MemoirItem';
import Sidebar from './Sidebar';
import NewMemoirButton from './NewMemoirButton';

const Dashboard = () => {

  
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [memoirs, setMemoir] = useState([]);
  const [error, setError] = useState(null);

  const url = 'http://localhost:4000/api/v1/todos';
  const accessToken = localStorage.getItem('token');
  const reqOptions = {
    headers: {
      'Authorization': `${accessToken}`,
      'Content-Type': 'application/json'
    }
  };

  useEffect(() => {
    axios.get(url, reqOptions)
    .then(data => {
        setMemoir(data.data);
        setLoading(false);
      } 
    )
    .catch(err => {
      setError(err);
      setLoading(false);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

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
      { !loading && memoirs.length === 0 && <h1 className="text-center text-5xl mx-auto mt-32">You currently don't have any memoirs</h1> }
      { loading ? <h1 className="text-center text-6xl mx-auto mt-64">Loading...</h1> : <div className="block">
        { memoirs.map(memoir => (
        <MemoirItem key={ memoir.id } memoir={ memoir } />
        ))}
        </div>}
      </div>
    </div>
  )
}

export default Dashboard
