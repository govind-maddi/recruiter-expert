import React,{ useEffect } from 'react'

import { useParams } from 'react-router-dom';

function Jobs() {

    const obj = useParams();

    useEffect(() => {
        console.log(obj);
    },[ obj ]);

  return (
    <div>Jobs</div>
  )
}

export default Jobs