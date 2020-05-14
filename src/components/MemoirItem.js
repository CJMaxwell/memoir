import React from 'react';

const MemoirItem = ({memoir}) => {
  const publishedOn = new Date(memoir.date)
  const dateFormat = publishedOn.toDateString();
  const dateArray = dateFormat.split(' ');
  const acceptedFormat = `${dateArray[1]} ${dateArray[2]}`
  
  return (
    <div className="max-w-md w-full mx-auto mt-8">
      <div className="border border-gray-400 bg-gray-100 rounded-b p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{memoir.title}</div>
          <p className="text-gray-700 text-base">{memoir.description}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
          <p className="text-gray-600">{acceptedFormat}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemoirItem
