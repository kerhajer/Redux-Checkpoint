import React from 'react'
import { useDispatch } from 'react-redux'
import {  FilterbyDone,FilterbyunDone,FilterbyAll } from '../redux/TodoSlice'

const Filtered = () => {
    let dispatch = useDispatch()
  return (
    <div style={{ dispay: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <button onClick={()=> dispatch(FilterbyAll()) }>
          All  </button>
          <button onClick={()=> dispatch(FilterbyDone())} >
        Done  </button>
        <button onClick={()=> dispatch(FilterbyunDone())}>
          unDone  </button>

    </div>
  )
}

export default Filtered