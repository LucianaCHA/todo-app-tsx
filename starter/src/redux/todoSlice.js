import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodoAsync = createAsyncThunk('todos/getTodoAsync', async () => {
    const response = await fetch('http://localhost:7000/todos');
    if(response.ok) {
        const todo = await response.json();
        return {todo};
    }
    throw new Error('Error ocurred fetching todos');
})

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Learn Redux", completed: false },
  ],
  //aqui se ponen los reducers
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo); //mi estado es un array así que lo actualizo pusheando la nueva tarea, no altero el estado original porque uso push
    },
    deleteTodo: (state, action) => {
        const todoIndex = state.findIndex((todo) => todo.id === action.payload.id);
        state.splice(todoIndex, 1);
    },
    toggleTodo: (state, action) => {
         state.map((todo) => {
              if (todo.id === action.payload.id) {
                   todo.completed = !todo.completed;
              }
              return 0;
         })

    //   const index = state.findIndex((todo) => todo.id === action.payload.id);
    //   state[index].completed = !state[index].completed;
    // ,
  },
},
//aqui se ponen los thunks , son los actions asincronos, el slice refiere al fullfiled (rta ok)
//y el rejected son los que se ejecutan cuando falla
extraReducers: {
    [getTodoAsync.fulfilled]: (state, action) => {
        state = action.payload.todo;
        return state;
    }
},
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer; //esto conecta al store
