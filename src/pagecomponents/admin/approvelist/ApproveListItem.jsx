import React from 'react'

function ApproveListItem( { item } ) {

    //func call to approve or disapprove the clients
    const approveOrDisapprove = async( action ) => {

        if(action === 'approve')
        {   
            const resp = await fetch(/* some api call to approve */);
            const data = await resp.json();
        }
        else
        {
            const resp = await fetch(/* some api call to approve */);
            const data = await resp.json();
        }

    }

  return (
    <div>ApproveListItem</div>
  )
}

export default ApproveListItem