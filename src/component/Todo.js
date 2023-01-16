import React, { useState } from 'react'
import { Deletetodo, ToggleTodo, UpdateToDo  } from '../redux/TodoSlice'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDispatch } from 'react-redux'



const Todo = ({todo}) => {
    const [isEdited, setIsEdited] = useState(false)
    const dispatch = useDispatch()
    const [updatedtask, setUpdatedtask] = useState('')

  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'start' ,gap:'10px'}}>
                    {isEdited ? 
                    <input type="text" value={updatedtask} onChange={(e) => setUpdatedtask(e.target.value)} /> : <h3 style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.task}</h3>}
                    

                    <button onClick={() => dispatch(Deletetodo(todo.id))}>  <DeleteRoundedIcon />  delete</button>
                    <button onClick={() => dispatch(ToggleTodo(todo.id))}> < CheckCircleOutlineIcon />{todo.isDone? 'Done': 'unDone'} </button>
                    <button onClick={() => {
                        setIsEdited(!isEdited); 
                        setUpdatedtask(todo.task)
                        isEdited && dispatch(UpdateToDo({ id: todo.id,task: updatedtask  }));

                    }}>update</button></div>
    </div>
  )
}

export default Todo