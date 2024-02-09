import React, { useState } from 'react'

function FilterApproveList( { tobeapprovedlist, filteredtobeapprovedlist, setFilteredToBeApprovedList } ) {

    const [ searchinput, setSearchInput ] = useState('');
    const [ filtervalues, setFilterValues ] = useState({});

    //func call to select filter values
    const handleSelectJobRole = (e) => {
        setFilterValues((prevValues) => {
            return {...prevValues, jobrole:e.target.value}
        })
    }

    //func call to handle searchinput
    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    }


    const filterByValues = () => {

        let templist = [...filteredtobeapprovedlist];

        if( filtervalues.jobrole !== 'All' )
        {
            
            templist = templist.filter((item) => {
                return item.jobrole === filtervalues.jobrole ;
            })
        }

            else
            {
                templist = [...tobeapprovedlist];
            }
            
            setFilteredToBeApprovedList(templist);
        
        }

    //func call filter by search value
    const filterBySearch = () => {
        if( searchinput !== '' )
        {
            let templist = [...tobeapprovedlist];
            templist = templist.filter((item) => {
                return (item.jobrole).includes(searchinput);
            })

            setFilteredToBeApprovedList(templist);
        }
        else
        {
            setFilteredToBeApprovedList(tobeapprovedlist)
        }
    }

  return (
    <div>FilterApproveList</div>
  )
}

export default FilterApproveList