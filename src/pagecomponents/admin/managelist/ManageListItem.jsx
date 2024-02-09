import React from 'react'

function ManageListItem( { item } ) {

  useEffect(() => {

    const manageItem = async(action) => {
      
      if(action === 'deactivate')
      {
        const resp = await fetch(/* some api call to deactivate  */);
        const data = await resp.json();
      }
      else if(action === 'activate')
      {
        const resp = await fetch(/* some api call to activate */);
        const data = await resp.json();
      }
      else
      {
        const resp = await fetch(/* some api call to delete */);
        const data = await resp.json();
      }
    }

  })

  return (
    <div>ManageListItem</div>
  )
}

export default ManageListItem