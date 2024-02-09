import React, { useEffect, useState } from 'react'
import FilterApproveList from './approvelist/FilterApproveList';
import ApproveListItem from './approvelist/ApproveListItem';

function ApproveList() {

    const [ tobeapprovedlist,setToBeApprovedList ] = useState([]);
    const [ filteredtobeapprovedlist,setFilteredToBeApprovedList ] = useState([]);

  //async call in useEffect to fetch client list to be approved
  useEffect(() => {

    const fetchClients_Approve = async() => {
        const resp = await fetch(/* some api call to fetch clients list */);
        const data = await resp.json();

        setToBeApprovedList(data);
    }

  }, [])


  return (
    <div>
        <FilterApproveList tobeapprovedlist={ tobeapprovedlist } filteredtobeapprovedlist={ filteredtobeapprovedlist } setFilteredToBeApprovedList={ setFilteredToBeApprovedList }/>
        
        {
            filteredtobeapprovedlist.map((item, index) => {
                return <ApproveListItem key={index} item={item} />
            })
        }
    </div>
  )
}

export default ApproveList