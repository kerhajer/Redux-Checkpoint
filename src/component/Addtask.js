import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodos } from '../redux/TodoSlice'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Addtask = () => {
    const dispatch = useDispatch()
    const [newtask, setNewtask] = useState('')
    const Adding = () => {
        dispatch(AddTodos({
            id: Math.random(),
            task: newtask,
            isDone: false
        }))
        setNewtask('')

    }
    return (
        <div >
            <div className="heading">
                <img className="heading__img" src='./laptop.svg' />
                <h1 className="heading__title">To-Do List</h1>
            </div>
            <div className="form">

                <label className="form__label" for="todo">~ Today I need to ~</label>
                <input className="form__input" type="text" value={newtask}
                    onChange={(e) => setNewtask(e.target.value)} />
                <button onClick={Adding}>
                    <span >Add</span>
                </button>
            </div>





        </div>




    )



}
export default Addtask