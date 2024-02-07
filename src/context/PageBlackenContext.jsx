import React, { createContext, useState } from 'react'

export const PageBlackenFlag = createContext();
export const SetPageBlackenFlag = createContext();

function PageBlackenContext( { children } ) {

  const [ flag,setFlag ] = useState(false);
  
  const handleFlag = (value) => {
    setFlag(value);
  }
    
  return (
    <>
      <PageBlackenFlag.Provider value={ flag }>
        <SetPageBlackenFlag.Provider value={ handleFlag }>
          { children }
        </SetPageBlackenFlag.Provider>
      </PageBlackenFlag.Provider>
    </>
  )
}

export default PageBlackenContext;