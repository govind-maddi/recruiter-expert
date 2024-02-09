import React, { useState } from 'react'

function CreateRoles() {

    const [ createroleobj, setCreateRoleObj ] = useState({});

    const handleCreateRoleObj = ( obj ) => {

        const { key, value } = obj;

        setCreateRoleObj((prevRole) => {
            return {
                ...prevRole,
                [key]:value,
            }
        })

    }

    const onCreateRole = async () => {

        const resp = await fetch(' ',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(createroleobj)
        });

        const data = await resp.json();

    }

  return (
    <div>CreateRoles</div>
  )
}

export default CreateRoles;