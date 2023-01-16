import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todo';



const TodoList = () => {
    const todos = useSelector(state => state.todoreducer.todos)
    const Filter = useSelector(state => state.todoreducer.Filter)

    
    return (

        <div >
            <ul className="toDoList" style={{ dispay: 'flex', justifyContent: 'space-between', gap: '20px' }}>
    
                {(((Filter=='Done')? todos.filter(todo =>todo.isDone == true):(Filter == 'unDone'))? todos.filter(todo=>todo.isDone == false) :
                todos).map(todo => <Todo todo={todo} key={todo.id} />)}
            </ul>




        </div>




    )



}
export default TodoList