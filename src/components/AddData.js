import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setUserData } from '../store/reducer/userReducer';

const AddData = () => {

    const dispatch = useDispatch();

    let movies = [];
    const addMovie = () => {
        let movie = {
            id: Date.now(),
            name: document.getElementById('name').value,
            age: document.getElementById('age').value
        }
        movies = [...movies,movie];
        // console.warn('added', { movies });
        dispatch(setUserData(movies));
    }

    return (
        <>
            <div>
                <input id='name' type="text"/>
            </div>
            <div>
                <input id='age' type="number"/>
            </div>
            <div>
                {/* <input onChange={handleInputs} value={state.address} name="address" type="text" /> */}
            </div>
            <div>
                <button onClick={addMovie}>Save Data</button>
            </div>
        </>
    )
}

export default AddData