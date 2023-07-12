"use client"

import { useTodos } from "@/store/Todos";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Edit = () => {

  const { viewEdit, handleEdit } = useTodos();
  const [editvalue, setEditValue] = useState(viewEdit);
  const router = useRouter()

  const handleFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();

      handleEdit(editvalue);
      if(editvalue.status==='Progress'){
        router.push('/?task=progress');
      }else{
        router.push('/');
      }
      // handleAddTask(task, description);
      // console.log("got this", task, description)
      // // console.log(handleAddTask);
      // setTask("");
      // setdescription("");
      // // alert("One task is added");
      // router.push('/')
  }
  const handlechange = (event)=>{
    setEditValue({
      ...editvalue,
      [event.target.name] : event.target.value
    })
    // console.log(editvalue);
  }


  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Write your task Title" name="task" value={editvalue.task} onChange={handlechange}/>
        <input type="text" placeholder="Write your task " name="description" value={editvalue.description} onChange={handlechange}/>
        <button type="submit"  >Edit Task</button>
        {/* <Navbar/> */}
        {/* <AllTasks/> */}
        
    </form>
  )
}

export default Edit