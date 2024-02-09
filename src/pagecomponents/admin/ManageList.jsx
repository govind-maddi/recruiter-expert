import React,{ useState } from 'react'
import FilterManageList from './managelist/FilterManageList';
import ManageListItem from './managelist/ManageListItem';

function ManageList() {

    const [ managelist,setManageList ] = useState([]);
    const [ filteredmanagelist,setFilteredManageList ] = useState([]);

  //async call in useEffect to fetch client list to be managed
  useEffect(() => {

    const fetchClients_Manage = async() => {
        const resp = await fetch(/* some api call to fetch clients list */);
        const data = await resp.json();

        setManageList(data);
        setFilteredManageList(data);
    }

  }, [])

  return (
    <div>
        <FilterManageList managelist={managelist} filteredmanageList={filteredmanagelist} setFilteredManageList={setFilteredManageList} />
        {
            filteredmanagelist.map((item, index) => {
                return <ManageListItem item={item} />
            })
        }
    </div>
  )
}

export default ManageList