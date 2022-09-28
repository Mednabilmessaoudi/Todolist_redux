import React from "react";
import {ddtodo} from '../Redux/FakeSlice'
import {useDispatch} from 'react-redux'
import { useState } from "react";


const Addtodo = () => {


const dispatch = useDispatch()
const [title,setTitle] = useState("")
  return (
    <div >
      <input placeholder="set todo" onChange={(e)=>{setTitle (e.target.value)} }/>
      <button onClick={()=>dispatch(ddtodo(title))}>Add</button>
    </div>
  );
};

export default Addtodo;
