import React,{ createContext, useEffect, useState } from 'react'

import FilterJobsApply from '../../pagecomponents/enduser/FilterJobsApply';
import JobsApply from '../../pagecomponents/enduser/JobsApply';

export const JobsToApplyList = createContext();

function Jobs() {

  //jobstoapply is not updated or modified and only use to get filtered list after search
  const [ jobstoapply,setJobsToApply ] = useState([{ jobrole:'Software Engineer',joblocation:'hyderabad',jobctc:'4lpa' }, { jobrole:'Software Developer',joblocation:'delhi',jobctc:'10lpa' }, { jobrole:'UI Designer',joblocation:'hyderabad',jobctc:'8lpa' }]);
  
  //filteredjobstoapply is updated everytime and is used for mapping the jobs to user
  const [ filteredjobstoapply,setFilteredJobsToApply ] = useState([{ jobrole:'Software Engineer',joblocation:'hyderabad',jobctc:'4lpa' }, { jobrole:'Software Developer',joblocation:'delhi',jobctc:'10lpa' }, { jobrole:'UI Designer',joblocation:'hyderabad',jobctc:'8lpa' }]);

  //async call in useEffect to fetch jobs to apply list
  useEffect(() => {

    const fetchJobsToApply = async() => {
      const resp = await fetch(/* some api call to fetch jobs */);
      const data = await resp.json();

      setJobsToApply(data);
    }

    //fetchJobsToApply();
  }, []);

    

  return (
    <div>
      <FilterJobsApply jobstoapply={ jobstoapply } filteredjobstoapply={ filteredjobstoapply } setFilteredJobsToApply={ setFilteredJobsToApply } />
      <JobsApply filteredjobstoapply={ filteredjobstoapply } />
    </div>
  )
}

export default Jobs