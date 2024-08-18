import React from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () =>  {

    const {gif,loading,fetchData} = useGif();
    const clickHandler = () => {

        fetchData();

    }
	return (
	  <div className='bg-green-400 w-1/2 rounded-lg border border-black
      flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className=' mt-[15px] text-2xl underline uppercase font-semibold'> A Random GIF</h1>
        {loading ? (<Spinner></Spinner>):(<img src={gif} width="450"/>)}
        <button
        className='w-10/12 mb-[15px] bg-yellow-500 text-lg py-2 rounded-lg'
        onClick={clickHandler}
        >Generate</button>
	  </div>
	);
  }
  
  export default Random;
  