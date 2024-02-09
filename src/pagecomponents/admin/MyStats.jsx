import React, { useEffect, useState } from 'react'

function MyStats() {

    const [ adminstats, setAdminStats ] = useState();

  //async call in useEffect to fetch stats of admin
  useEffect(() => {

    const fetchAdminStats = async() => {
        const resp = fetch(/* someapi call to fetch stats */);
        const data = resp.json();

        setAdminStats(data);
    }

  }, [])

  return (
    <div>MyStats</div>
  )
}

export default MyStats