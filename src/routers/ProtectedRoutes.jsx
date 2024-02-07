import React, { useEffect, useState } from 'react'

function ProtectedRoutes( { Comp } ) {

    const [ user, setUser ] = useState(true);

  
    /* useEffect(() => {
        setUser(useAuth());
    },[]) */

  return (
    user ? <> { Comp } </> : <>Login </>
  )
}

export default ProtectedRoutes