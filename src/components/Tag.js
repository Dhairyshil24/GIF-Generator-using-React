import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


  
  const Tag = () =>  {

    const [tag, setTag] = useState('');
    const {gif,loading,fetchData} = useGif(tag);
    
    
    const clickHandler = () => {

        fetchData(tag);

    }

    const changeHandler = (event) => {

       setTag(event.target.value);
       console.log(setTag);


    }
	return (
	  <div className='bg-blue-400 w-1/2 rounded-lg border border-black
      flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className=' mt-[15px] text-2xl underline uppercase font-semibold'>Random {tag} GIF</h1>
        {loading ? (<Spinner></Spinner>):(<img src={gif} width="450"/>)}
        <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={changeHandler}
        value={tag}
        />
        <button
        className='w-10/12 mb-[15px] bg-yellow-500 text-lg py-2 rounded-lg'
        onClick={clickHandler}
        >Generate</button>
	  </div>
	);
  }
  
  export default Tag;
  