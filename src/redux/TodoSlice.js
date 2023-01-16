import { createSlice } from "@reduxjs/toolkit";
const TodoSlice = createSlice({
    name:'todos',
    initialState:{
        todos:[{
            id:Math.random(),
            task:" learn react",
            isDone:false
        }],

        Filter:'All'
    },
    reducers:{

        AddTodos : (state,action)=>{
            state.todos.push(action.payload)
        },
        Deletetodo:(state,action)=>{
          state.todos = state.todos.filter (el=> el.id!== action.payload)
        },
        ToggleTodo:(state,{type,payload})=>{
            state.todos.map(el=> (el.id=== payload)? el.isDone= !el.isDone: el.isDone)
        },
        UpdateToDo:(state,{type,payload})=>{
            
            state.todos.map(el => (el.id == payload)?   el.task = payload.task  : el.task    )
        },

        FilterbyDone:(state)=>{ state.Filter='Done'

        },
        FilterbyunDone:(state)=>{ state.Filter='unDone'
        },
        FilterbyAll:(state)=>{ state.Filter='All'
        }

    }






})
export default TodoSlice.reducer
export const {AddTodos, Deletetodo,ToggleTodo,UpdateToDo, FilterbyDone,FilterbyunDone,FilterbyAll} = TodoSlice.actions