import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  
  const Random = () =>  {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    
    const clickHandler = () => {

        fetchData();

    }

    async function fetchData(){

        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        const image_source = data.data.images.downsized_large.url;
        console.log(image_source);
        setGif(image_source);
        setLoading(false);

    }

    useEffect(()=>{
        fetchData();
    },[])
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
  