import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Roles_Client() {

  const { clientrole } = useParams();
  const [ userlist,setUserList ] = useState([]);

  const performAction = async(value) => {
    
    const resp = await fetch(/* some api call to check permission */);
    const data = await resp.json();

  }

  useEffect(() => {

    const checkPermission = async() => {
      const resp = await fetch(/* some api call to check permission */);
      const data = await resp.json();

      setUserList(data);
    }
    
    
  }, [clientrole])

  return (
    <div>Roles_Client</div>
  )
}

export default Roles_Client