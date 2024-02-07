import React, { useEffect, useState } from 'react'

function UserJobApplication( { application }, { deleteUserJobApplication } ) {

    const [ jobstatus,setJobStatus ] = useState();

    //async call in useEffect to get application job status
    useEffect(() => {

        const fetchJobStatus = async() => {
            const resp = await fetch(/* some api call to check job status */);
            const data = await resp.json();

            setJobStatus(data);
        }

    }, [])

  return (
    <div>UserJobApplications</div>
  )
}

export default UserJobApplication