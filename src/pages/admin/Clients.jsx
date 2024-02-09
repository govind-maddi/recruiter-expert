import React, { useState } from 'react'
import ApproveList from '../../pagecomponents/admin/ApproveList'
import ManageList from '../../pagecomponents/admin/ManageList'

function Clients() {

  const [ currenttab, setCurrentTab ] = useState(true);

  const toggleTabs = (value) => {

    if(value === 'approve')
      setCurrentTab(true);
    else
      setCurrentTab(false);

  }

  return (
    <div>


      { currenttab && <ApproveList /> }
      { ! currenttab && <ManageList /> }
    </div>
  )
}

export default Clients