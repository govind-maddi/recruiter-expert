import React, { createContext, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

/* page comps of dashboard_user */
import MyResumes from '../../pagecomponents/enduser/MyResumes';
import MyStats from '../../pagecomponents/enduser/MyStats';
import MyApplications from '../../pagecomponents/enduser/MyApplications';

/* dynamic comps of dashboard */
import ResumeViewer from '../../pagecomponents/enduser/ResumeViewer';
import ResumeManage from '../../pagecomponents/enduser/ResumeManage';


//context to handle dynamic comp
export const ResumeFlags = createContext();

function Dashboard_User() {

    //dynamic comp state logic
    const [ viewerflag,setViewerFlag ] = useState(false);
    const [ versionmanageflag,setVersionManageFlag ] = useState(false);


    //handle dynamic comp state 
    const handleViewerFlag = (boolvalue) => {
      setViewerFlag(boolvalue);
    }

    const handleVersionManageFlag = (boolvalue) => {
      setVersionManageFlag(boolvalue);
    }


    /* useEffect(() => {
        console.log(obj);
    },[ ]); */

  return (
  
    <div>

        {/* context */}
        <ResumeFlags.Provider value={ { viewerflag, handleViewerFlag, versionmanageflag, handleVersionManageFlag } }>
          
          <MyResumes/>
        
        </ResumeFlags.Provider>
        
        <MyStats/>
        <MyApplications/>

        {/* dyanmic comp */}
        {
           viewerflag === true && <ResumeViewer/>
        }

        {
           versionmanageflag === true && <ResumeManage/>
        }

    </div>
  )
}

export default Dashboard_User;