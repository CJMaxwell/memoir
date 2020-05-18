import React from 'react';
import { useHistory } from 'react-router-dom';


const MemoirItem = ({ memoir }) => {

  const history = useHistory();
  const publishedOn = new Date(memoir.date)
  const dateFormat = publishedOn.toDateString();
  const dateArray = dateFormat.split(' ');
  const weekday = `${dateArray[0]}`;
  const day = `${dateArray[2]}`;

  return (
      <div onClick={() => history.push(`/memoir/${memoir.id}`)} className="flex cursor-pointer px-8 bg-white py-6 shadow-lg rounded-lg mt-4 flex-wrap">
        <div className="w-1/6">
          <p className="font-semibold text-xl uppercase">{weekday}</p>
          <span className="font-bold text-6xl">{day}</span>
        </div>
        <div className="w-5/6">
          <h4 className="font-semibold text-2xl leading-tight truncate">{memoir.title}</h4>
          <p className="mt-2 text-gray-800">{memoir.description}</p>
          <div className="mt-10">
            <span className="text-gray-600">2.55p.m</span>
          </div>
        </div>
      </div>
    
  )
}

export default MemoirItem
