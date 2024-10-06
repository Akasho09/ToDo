//starts with Capital and ends with jsx

import { useState } from "react";

// function onclickfn(){
// fetch ("https://localhost:3000/todo" ,{
//     method:"POST",
//     body : JSON.stringify({
//         title : title,
//         Description : desc,
//         Doneby : done,
//         Completed : false
//     }) ,
//     headers : {
//      "contentType" : "application/json"
//     }
// }
// )
// .then(async (res)=>{
// const json = await res.json();
// alert("Todo added")
// })
// }
let count=1;
export function CreateTodo () {
    const [id,setid]=useState("")
    const [title,setTitle] = useState("");
    const [desc,setDescription] = useState("");
    const [done,setdone] = useState("");

    return <div>
        <input type="text" placeholder="Title of Todo"  style = {{
            padding : 10,
            margin :10
        }} onChange={(e)=>{
            const title = e.target.value;
            setid(count++);
            setTitle(e.target.value);
        }}/><br />
        <input type="text" placeholder="Description" style = {{
            padding : 10,
            margin :10
        }} onChange={(e)=>{
            const desc = e.target.value;
            setDescription(e.target.value);
        }}/> <br/>
        <input type="number" placeholder="To be done by" style = {{
            padding : 10,
            margin :10
        }} onChange={(e)=>{
           const done= e.target.value;
           setdone(e.target.value);
        }}/><br />
        <button onClick={ ()=>{
fetch('http://localhost:3000/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        key: id,
        title : title,
        Description : desc,
        Doneby : done,
        Completed : false
    })
})
.then(async (res)=>{
const json = await res.json();
alert("Todo added")
})}
}>Add a Todo</button>    <br />
    </div>
}