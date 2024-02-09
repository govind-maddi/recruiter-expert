import React from 'react'

function FilterAssignRoles( { assignroleslist, filteredassignroleslist, setFilteredAssignRolesLIst } ) {

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

      let templist = [...filteredassignroleslist];

      if( filtervalues.jobrole !== 'All' )
      {
          
          templist = templist.filter((item) => {
              return item.jobrole === filtervalues.jobrole ;
          })
      }

          else
          {
              templist = [...assignroleslist];
          }
          
          setFilteredAssignRolesLIst(templist);
      
      }

  //func call filter by search value
  const filterBySearch = () => {
      if( searchinput !== '' )
      {
          let templist = [...assignroleslist];
          templist = templist.filter((item) => {
              return (item.jobrole).includes(searchinput);
          })

          setFilteredAssignRolesLIst(templist);
      }
      else
      {
          setFilteredAssignRolesLIst(assignroleslist)
      }
  }

  return (
    <div>FilterAssignRoles</div>
  )
}

export default FilterAssignRoles