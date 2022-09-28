import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const SearchData = () => {

  const { userData } = useSelector((state) => state.userReducer);
  // console.log(userData);

  const [searchdata, setSearchdata] = useState(userData);

  const filterData = e => {
    const search = e.target.value.toLowerCase();
    const filteredData = userData?.filter(item => item?.name.toLowerCase().includes(search));
    setSearchdata(filteredData);
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search Data"
        onChange={(e) => filterData(e)}
      />

      {
        searchdata?.length === undefined ? '' :
          <>
            {searchdata?.map((user) =>
              <div key={user.id}>
                <div>
                  <label>Name: {user?.name}</label>
                </div>
                <div>
                  <label>Age: {user?.age}</label>
                </div>
                <div>
                  <label>Age: {user?.time}</label>
                </div>
              </div>
            )
            }
          </>
      }
    </div>
  )
}

export default SearchData