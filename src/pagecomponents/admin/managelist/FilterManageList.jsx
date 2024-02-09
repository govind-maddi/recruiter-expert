import React from 'react'

function FilterManageList( { managelist, filteredmanageList, setFilteredManageList } ) {

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

        let templist = [...filteredmanageList];

        if( filtervalues.jobrole !== 'All' )
        {
            
            templist = templist.filter((item) => {
                return item.jobrole === filtervalues.jobrole ;
            })
        }

            else
            {
                templist = [...managelist];
            }
            
        
        }

    const filterBySearch = () => {
        if( searchinput !== '' )
        {
            let templist = [...managelist];
            templist = templist.filter((item) => {
                return (item.jobrole).includes(searchinput);
            })

            setFilteredManageList(templist);
        }
        else
        {
            setFilteredManageList(managelist)

        }
    }

  return (
    <div>FilterManageList</div>
  )
}

export default FilterManageList