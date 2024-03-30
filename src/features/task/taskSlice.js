import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

export const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    
    addTask: (state, action) => {
      const newTask = { id: nanoid(), text: action.payload };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state)); 
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const newState = state.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    
  },
});

export const { addTodo, toggleTodo, updateTodo, deleteTodo, markAllComplete } =
  todoSlice.actions;
export default todoSlice.reducer;
