import React, { useState } from 'react'
import FilterAssignRoles from './assignroles/FilterAssignRoles'
import AssignRoleListItem from './assignroles/AssignRoleListItem';


function AssignRoles() {

    const [ assignroleslist, setAssignRolesList ] = useState([]);
    const [ filteredassignroleslist, setFilteredAssignRolesList] = useState([]);

    //async call in useEffect to fetch clients list to assign roles
    useEffect(() => {

        const fetchAssignRolesList = async () => {
            const resp = await fetch(/* some api call to fetchroles */)
            const data = resp.json()

            setAssignRolesList(data);
            setFilteredAssignRolesList(data);
        }

    })

  return (
    <div>
       <FilterAssignRoles assignroleslist={ assignroleslist } filteredassignroleslist={ filteredassignroleslist } setFilteredAssignRolesLIst={ setAssignRolesList } />
       {
            filteredassignroleslist.map((item, index) => {
                return <AssignRoleListItem key={index} item={ item } />
            })
       }
    </div>
  )
}

export default AssignRoles