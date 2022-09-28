import React from 'react'
import TodoCard from './TodoCard'
import { useSelector } from 'react-redux'


const Listtodo = () => {
    const fake = useSelector((state => state.fake))
  return (
    <div>
      {fake.map((job) => <TodoCard job = {job} />)}
    </div>
  );
}

export default Listtodo;