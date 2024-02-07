import React, { useEffect, useState } from 'react'

function ResumeViewer() {

  const [ resumeimg, setResumeImg ] = useState();

  useEffect(() => {

    const fetchResume = async () => {

      const resumeid = localStorage.getItem('resumeid');

      const response = await fetch(/* someapi for reusme png */);
      const data = await response.json();

      setResumeImg(data);

    }
    //fetchResume();

  },[] )


  return (
    <div>
        {/* dialog box */}
        resume viewer
        {/* high quality png image */}
        { resumeimg }
    </div>
  )
}

export default ResumeViewer