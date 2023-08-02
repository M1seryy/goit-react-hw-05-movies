import { movieOverview } from 'API/trends';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Reviews = () => {
    const [data, setdata] = useState([]);
    const { movieId } = useParams();

    useEffect(()=>{
        movieOverview(movieId)
      .then(res => setdata(res))
      .catch(err => console.log(err));

    },[])
    console.log(data);
  return (
    <h1>{data.overview}</h1>
  )
}

export default Reviews