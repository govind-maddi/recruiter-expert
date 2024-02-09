import React, { useEffect, useState } from 'react'

function AssignRoleListItem( { item } ) {
    
    const [ selectedvalue, setSelectedValue ] = useState();
    const [ rolesCreated,setRolesCreated ] = useState(["Approver","Reviewer","Commenter"]);

    const handleSelectRoles = async(e) => {

        const resp = await fetch(/* some api call to assign role */);
        const data = await resp.json();

    }

  return (
    <div>
        { item }
    </div>
  )
}

export default AssignRoleListItem