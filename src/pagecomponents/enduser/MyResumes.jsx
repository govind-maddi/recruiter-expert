import React, { useEffect, useState } from 'react'
import Resume from './myresumecomp/Resume';

function MyResumes( ) {
  
  const [ resumelist, setReusmeList ] = useState([]);


  //async useeffect call at mount
  useEffect( () => {
    
    const fetchResumes = async () => {
      const response = await fetch(/* someapicall/resumes */);
      const data = await response.json();

      setReusmeList(data);
    }
    //fetchResumes();

  }, [])

  return (
    <div>
      Resumes
      {
        
        resumelist.map((resume) => {
 
          return <Resume resume={resume} />

        })
      }

      {/* upload resume btn */}

    </div>
  )
}

export default MyResumes