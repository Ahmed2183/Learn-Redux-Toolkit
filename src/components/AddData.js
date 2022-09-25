import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setUserData } from '../store/reducer/userReducer';

const AddData = () => {

    const dispatch = useDispatch();

    /*
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')

    const [state, setState] = useState({
        name: '',
        age: '',
        address: ''
    })

    const handleInputs = e => {
        setState({ ...state, [e.target.name]: e.target.value }); //...state means all states
    }


    const addData = () => {
        let arr = [];
        let data = {
            id: Date.now(),
            name: state.name,
            age: state.age,
            address: state.address
        }
        arr.push(data);
        console.log(arr);

        // arr.push(state);
        // console.log(arr);
        // console.log(state)
        // const data = {name,age,address}; //-->Data in object
        // console.log(data);
        // dispatch(setUserData(state));
    }

    */

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