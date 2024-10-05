import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todos } from './components/Todos'
import { CreateTodo } from './components/CreateTodo'

function App() {
  const [todos,setTodos] = useState([]);
  // cors error => install cors 
  fetch ("http://localhost:3000/todo")
  .then (async function(res){
const json= await res.json(); 
setTodos(json.data)  // json.dat 
  })
  return (
    <div>
  <CreateTodo></CreateTodo>
  <Todos todos={todos}></Todos>
  </div>
  )
}

export default App
