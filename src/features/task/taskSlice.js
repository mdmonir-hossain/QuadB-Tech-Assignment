import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
export const taskSlice = createSlice({
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
      const newState = state.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
    
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
