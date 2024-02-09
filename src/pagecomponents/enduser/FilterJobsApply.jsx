import React, { useEffect, useState } from 'react'

function FilterJobsApply( { jobstoapply, filteredjobstoapply, setFilteredJobsToApply } ) {

    //filter states of compononent
    const [ searchinput,setSearchInput ] = useState('Softw');
    const [ filtervalues, setFilterValues ] = useState({jobctc:'10lpa',joblocation:'All'});
    

    //func call to set searchInput
    const handleSearchInput = (e) => {

        const value = e.target.value; 
        setSearchInput(value);

    }

    //func calls to set filter values
        const handleSelectJobCtc = (e) => {

            setFilterValues((prevValues) => {
                return {...prevValues,jobctc:e.target.value};
            })


        }
        const handleSelectJobLocation = (e) => {

            setFilterValues((prevValues) => {
                return {...prevValues,joblocation:e.target.value};
            })

        }


    //func call to filter the filterjobstoapply list
    const filterByValues = () => {

        let templist = [...filteredjobstoapply];

        if( filtervalues.jobctc !== 'All' && filtervalues.joblocation !== 'All' )
        {
            
            templist = templist.filter((item) => {
                return item.jobctc === filtervalues.jobctc && item.joblocation === filtervalues.joblocation;
            })
        }
        else if( filtervalues.jobctc === 'All' || filtervalues.joblocation === 'All' )
        {
            if( filtervalues.jobctc === 'All' )
            {
                
                templist = templist.filter((item) => {
                    return item.joblocation === filtervalues.joblocation
                })
            }

            else if( filtervalues.joblocation === 'All' )
            {
                
                templist = templist.filter((item) => {
                    return item.jobctc === filtervalues.jobctc
                })
            }

            else
            {
                templist = [...jobstoapply];
            }
        }
        setFilteredJobsToApply(templist);

    }

    //func call filter by search value
    const filterBySearch = () => {
        if( searchinput !== '' )
        {
            let templist = [...jobstoapply];
            templist = templist.filter((item) => {
                return (item.jobrole).includes(searchinput);
            })

            setFilteredJobsToApply(templist);
        }
        else
            alert('Enter role to search');
    }
   

  return (
    <div>FilterJobsApply
        <button onClick={filterBySearch}>search</button>
        <button onClick={filterByValues}>filter</button>
    </div>
  )
}

export default FilterJobsApply