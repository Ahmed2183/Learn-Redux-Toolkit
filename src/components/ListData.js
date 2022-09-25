import React from 'react'
import { useSelector } from 'react-redux';

const ListData = () => {

    const { userData } = useSelector((state) => state.userReducer);
    // console.log(userData);

    return (
        <>
            {/* {
            userData?.map((user) => 
            <label>{user?.name}</label>
            )
        } */}

            {
                userData.length === undefined ? 'No data' :
                    <>
                        {userData?.map((user) =>
                            <div key={user.id}>
                                <div>
                                    <label>Name: {user?.name}</label>
                                </div>
                                <div>
                                    <label>Age: {user?.age}</label>
                                </div>
                                {/* <div>
                                    <label>Address: {userData.address}</label>
                                </div> */}
                            </div>
                        )
                        }
                    </>
            }
        </>
    )
}

export default ListData