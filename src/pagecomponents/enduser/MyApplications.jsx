import React, { useEffect, useState } from 'react'
import UserJobApplication from './myapplications/UserJobApplication';
import FilterApplications from './myapplications/FilterApplications';

function MyApplications() {

  const [ applications,setApplicationsList ] = useState([]);
  const [ savedapplications,setSavedApplications ] = useState([]);

  const [ jobrolefilter,setJobRoleFilter ] = useState();
  const [ joblocationfilter,setJobLocationFilter ] = useState();
  const [ jobctcfilter,setJobCtcFilter ] = useState();

  const [ filterchange,setFilterChange ] = useState();


  //set filters of the appilication
      const handleJobRoleFilter = (role) => {
        setJobRoleFilter(role);
        setFilterChange(Math.floor(Math.random() * 100));
      }
    
      const handleJobLocationFilter = (location) => {
        setJobLocationFilter(location);
        setFilterChange(Math.floor(Math.random() * 100));
      }
    
      const handleJobCtcFilter = (ctc) => {
        setJobCtcFilter(ctc);
        setFilterChange(Math.floor(Math.random() * 100));
      }


  //func call to delete job application applied by user
  const deleteUserJobApplication = async(application) => {

    let templist = [...applications];
    templist = templist.filter((item) => {
      return item.id !== application.id;
    })

    setApplicationsList(templist);
    setSavedApplications(templist);

    const resp = await fetch(/* some api call to delete application */);
    const data = await resp.json();

  }

  //useEffect with filterchange state
 


  //async call in useEffect to fetch job applications applied by user
  useEffect(() => {

    const fetchJobApplications = async() => {
      const resp = await fetch(/* some api call to fetch jobapplication */);
      const data = await resp.json();

      setApplicationsList(data);
      setSavedApplications(data);
    }

  }, [])

  return (
    <div>

      <FilterApplications  />

      {
        applications.map((application) => {
          return <UserJobApplication application={ application } deleteUserJobApplication={ deleteUserJobApplication }/>
        })
      }
      Applications
    </div>
  )
}

export default MyApplications