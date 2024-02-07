import React, { useEffect, useState } from 'react'

function MyStats() {

  const [ stats,setStats ] = useState([]);

  //async call in useEffect to fetch user stats
  useEffect(() => {

    const fetchUserStats = async() => {
      const resp = await fetch(/* some api call to fetch user details */);
      const data = await resp.json();

      setStats(data);
    }

  }, [])

  return (
    /* build stats and just insert the data through stats */
    <div>MyStats</div>
  )
}

export default MyStats