import React, { useEffect, useState } from 'react'

import CreateRoles from '../../pagecomponents/admin/CreateRoles';
import AssignRoles from '../../pagecomponents/admin/AssignRoles';
import ManageRoles from '../../pagecomponents/admin/ManageRoles';

function Roles_Admin() {

  const [ currenttabs, setCurrentTabs ] = useState("create");

  const handleCurrentTabs = (value) => {
      setCurrentTabs(value);
  }

  return (
    <div>

      { currenttabs === 'create' && <CreateRoles /> }
      { currenttabs === 'assign' && <AssignRoles /> }
      { currenttabs === 'delete' && <ManageRoles /> }
    </div>
  )
}

export default Roles_Admin