import { deletetodo } from "../Redux/FakeSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {ddtodo} from '../Redux/FakeSlice'



const TodoCard = ({ job }) => {
  const dispatch = useDispatch();
  const [showTitle, setShowtitle] = useState(false);
  const [newTitle, setNewtitle] = useState(job.title);

  

  return (
    <>
      <div className="card-holder">
        <div className={job.isDone ? "card bg-gold" : "card bg-news"}>
          {!showTitle && <h1 style={{ fontWeight: "bold" }}> {job.title}</h1>}
          {showTitle && <input placeholder={job.title} onChange={(e) => {setNewtitle(e.target.value)}} />}

          <button onClick={() => dispatch(deletetodo(job.id))}>Delete</button>
          <button onClick={() => setShowtitle(!showTitle)}>
            {showTitle ? " edit" : "edit"}
          </button>
          <button onClick={()=>dispatch(ddtodo(newTitle))  }  >save</button>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
