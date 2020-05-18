import React from 'react';
import { useHistory } from 'react-router-dom';


const NewMemoirButton = () => {
  const history = useHistory();

  return (
    <button onClick={() => history.push('/create-memoir')} className="flex items-center mt-2 bg-teal-600 text-white px-3 py-2 shadow-lg rounded">
      <svg className="h-5 w-5" aria-labelledby="svg-inline--fa-title-GxNoaVwNXfgy" data-prefix="fas" data-icon="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
      </svg>
      <span className="pl-2">New Memoir</span>
    </button>
  )
}

export default NewMemoirButton
