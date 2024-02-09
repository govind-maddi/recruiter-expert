import React, { useEffect, useState } from 'react'

function MyOrganisation() {

    const [ organisationdetails,setOrganisationDetails ] = useState();

  //async call in useEffect to fetch organisation details of admin
  useEffect(() => {
    
    const fetchOrganisationDetails = async() => {
        const resp = await fetch(/* some api call to fetch details */);
        const data = resp.json();

        setOrganisationDetails(data);
    }

  }, [])

  return (
    <div>MyOrganisation</div>
  )
}

export default MyOrganisation