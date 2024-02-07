import React, { useContext } from 'react'
import { ResumeFlags } from '../../../pages/enduser/Dashboard_User'

function Resume( { resume } ) {

  const { handleViewerFlag, handleVersionManageFlag } = useContext(ResumeFlags)

  const openViewer = () => {
    
    localStorage.setItem('resumeid',JSON.parse(resume));
    handleViewerFlag(true);

  }

  const openVersioner = () => {
    localStorage.setItem('resumeid',JSON.parse(resume));
    handleVersionManageFlag(true);
  }

  return (
    <div
      //onClick={ openViewer }
      //onClick={ openVersioner }
    >
      Resume
      {/* { resume } */}
    </div>
  )
}

export default Resume