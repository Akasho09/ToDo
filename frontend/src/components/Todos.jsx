import { useState } from "react";

export function Todos({todos}) {  // Destructure the `todos` prop
    return <div>
    { 
    todos.map((todo)=>{
    const [buttontext,setbuttontext] = useState("Marks as Completed");

function onclickfn(){
    setbuttontext('completed');
}
return <div>
   <ul>
    <li>{todo.key}</li>
    <li>{todo.title}</li>
    <li>{todo.Description}</li>
    <li>{todo.Doneby}</li>
    <button onClick={(onclickfn)}>{buttontext}</button>   
</ul>
   </div>
    }) 
    }
</div>
}
