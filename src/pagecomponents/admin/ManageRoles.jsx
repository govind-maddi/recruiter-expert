import React, { useEffect, useState } from 'react'

function ManageRoles() {

  const [ roleobj,setRoleObj ] = useState({});

  const handleRoleObj = (obj) => {

    const { key, value } = obj;
    
    setRoleObj((prevRole) => {
      return{
        ...prevRole,
        [key]:value,
      }
    })

  }


  const updateRoleObj = async() => {

    const resp = await fetch('',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(roleobj),
    });
    const data = await resp.json();


    }

const deleteRoleObj = async() => {

    const resp = await fetch('',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(roleobj),
    });
    const data = await resp.json();

    
    }

  //async call in useEffect to fetch already created job role
  const fetchRoleObj = async(e) => {

      const resp = await fetch(/* some api call to fetch roleobj details */)
      const data =await resp.json();
      
      setRoleObj(data);
    }

  return (
    <div>ManageRoles</div>
  )
  }
export default ManageRoles