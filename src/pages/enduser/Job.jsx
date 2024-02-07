import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

function Job() {

    const obj = useParams();

    useEffect(() => {
        console.log(obj);
    },[ obj ]);

  return (
    <div>Job</div>
  )
}

export default Job