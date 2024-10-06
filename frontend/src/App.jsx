import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'
import { CreateTodo } from './components/CreateTodo'
import { useEffect } from 'react'

function App() {
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    fetch ("http://localhost:3000/todo")
    .then (async function(res){
  const json= await res.json(); 
  setTodos(json.data)  // json.dat 
    })
  }) 
  // cors error => install cors 
 
  return (
    <div>
  <CreateTodo></CreateTodo>
  <Todos todos={todos}></Todos>
  </div>
  )
}

export default App
