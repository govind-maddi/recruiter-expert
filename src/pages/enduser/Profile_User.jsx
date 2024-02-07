import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom';

function Profile_User() {

    const obj = useParams();

    useEffect(() => {
        console.log(obj);
    },[ obj ]);

  return (
    <div>Profile</div>
  )
}

export default Profile_User