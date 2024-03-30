import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskInput from './Components/TaskInput/TaskInput'
import TaskList from './Components/TaskList/TaskList'

function App() {


  return (
    <div>
      <TaskInput />
      <TaskList />
    </div>
  )
}

export default App
