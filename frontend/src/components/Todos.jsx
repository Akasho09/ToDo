export function Todos({todos}) {  // Destructure the `todos` prop
    return <div>
    { 
    todos.map((todo)=>{
return <div>
    <h1>{todo.title}</h1>
    <h2>{todo.Description}</h2>
    <h2>{todo.Doneby}</h2>
    <button >{todo.Completed == true ? "Completed" : "Mark as Done" }</button>
</div>
    }) 
    }
</div>
}