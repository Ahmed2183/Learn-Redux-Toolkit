import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setUserData } from '../store/reducer/userReducer';

const AddData = () => {

    const dispatch = useDispatch();

    let movies = [];

    const addMovie = () => {

         /* replace(/\d/g, "") --> remove all numbers from the input */
        //  var num = document.getElementById('time').value.replace(/\d/g, "") ;

        /* replace(/[A-Za-z]/g, "") --> remove all characters from input */
        var num = document.getElementById('time').value.replace(/[A-Za-z]/g, "");

        /* Convert number into minutes and hours */
        var hours = (num / 60);
        var sethours = Math.floor(hours);
        var minutes = (hours - sethours) * 60;
        var setminutes = Math.round(minutes);
        var exacttime = sethours + " hour(s) and " + setminutes + " minute(s)."

        /* Add input data in array */
        let movie = {
            id: Date.now(),
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            time: exacttime,
        }
        movies = [...movies, movie];
    
        /* Send array data in redux store */
        dispatch(setUserData(movies));
    }

    return (
        <>
            <div>
                <input id='name' type="text" />
            </div>
            <div>
                <input id='age' type="number" />
            </div>
            <div>
                <input id='time' type="text" />
            </div>
            <div>
                <button onClick={addMovie}>Save Data</button>
            </div>
        </>
    )
}

export default AddData