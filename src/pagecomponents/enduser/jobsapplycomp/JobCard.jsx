import React from 'react'

function JobCard( { job } ) {

    //func call to apply to job post
    const onApply = async() => {

        const resp = await fetch(/* some api call to apply for this job */);
        const data = await resp.json();

    }

  return (
    <div>JobCard</div>
  )
}

export default JobCard