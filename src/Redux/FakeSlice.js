import { createSlice } from "@reduxjs/toolkit";

export const FakeSlice = createSlice({
  name: "fake",
  initialState: [
    {
      title: "React State",
      desc: "we are going to create our first class-based component and we are going also to create our first state.",
      id: 1,
      isDone: true,
    },
    {
      title: "Todo App with react",
      desc: "we are going to create a movie app where you can present your favorite movies or TV shows. We will also be able to use the react hooks.",
      id: 2,
      isDone: true,
    },
    {
      title: "Movie App with react router",
      desc: " use the movie app we have created in the previous checkpoint and afterward, we will use the router library to route our views.",
      id: 3,
      isDone: false,
    },
  ],
  reducers: {

    ddtodo : (state , actions) => {
      const newtask = {
        title : actions.payload,
        id :5,
        isDone : false
      };
      state.push(newtask);
    },

    deletetodo : (state,actions)=>{

      const sts = state.filter((t)=>t.id !== actions.payload);
      return sts
    },

    



    }


  
    })
       
     

export const {ddtodo , deletetodo , edittodo} = FakeSlice.actions;

export default FakeSlice.reducer;
