import React from 'react'
import JobCard from './jobsapplycomp/JobCard'

function JobsApply( { filteredjobstoapply } ) {

  console.log(filteredjobstoapply);

  return (
    <div>
      {
        filteredjobstoapply.map((job, index) => {
          return <JobCard key={index} job={job} />
        })
      }
    </div>
  )
}

export default JobsApply