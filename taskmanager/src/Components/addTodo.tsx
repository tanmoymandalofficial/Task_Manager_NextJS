"use client"

import { useTodos } from "@/store/Todos";
import { FormEvent, useState } from "react"
import AllTasks from "./AllTasks";
import Navbar from "./Navbar";
// import { redirect } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";


const AddTodo = () => {
    const [task, setTask] = useState("");
    const [description, setdescription] = useState("");

    const { handleAddTask } = useTodos();

    const router = useRouter()


    const handleFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleAddTask(task, description);
        console.log("got this", task, description)
        // console.log(handleAddTask);
        setTask("");
        setdescription("");
        // alert("One task is added");
        router.push('/')
    }


  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Write your task Title" value={task} onChange={event => setTask(event.target.value)}/>
        <input type="text" placeholder="Write your task " value={description} onChange={event => setdescription(event.target.value)}/>
        <button type="submit" >Add Task</button>
        {/* <Navbar/> */}
        {/* <AllTasks/> */}
        
    </form>
  )
}

export default AddTodo