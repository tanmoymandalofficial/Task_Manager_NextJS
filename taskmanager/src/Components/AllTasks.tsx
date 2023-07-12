"use client"

import { useTodos } from "@/store/Todos"
import {useRouter, useSearchParams} from "next/navigation"
import { useEffect, useState } from "react";


const AllTasks = () => {
    const {tasks, handleChangeStatus, handleDelete, handleView, markImportent} = useTodos();

    // let filterTodos = tasks;
    const[filterTodos, setfilterTodos] = useState([]);
    const searchParam = useSearchParams();
    const quiryParam = searchParam.get('task');
    const router = useRouter();
    // console.log(quiryParam);    
    useEffect(()=>{
        setfilterTodos(tasks)
        localStorage.setItem("myTasks", JSON.stringify(tasks));
        if(quiryParam === 'progress'){
            setfilterTodos((prev)=> prev.filter((todo)=> todo.status === 'Progress') )
        }
        else if(quiryParam === 'completed'){
            setfilterTodos((prev)=> prev.filter((todo)=> todo.status === 'Done') )

        }
        else if(quiryParam === null){
            setfilterTodos((prev)=> prev.filter((todo)=> todo.status === 'ToDo') )
        }
    },[quiryParam,tasks])

    const handleViewon = (task:{})=>{
        handleView(task);
        router.push('/view')
    }
    const handleEdit = (task:{})=>{
        handleView(task);
        router.push('/edit')
    }


  return (
    <div>
        <ol>
            {
                filterTodos.map((todo)=>{
                    return (
                    <li key={todo.id}>
                        {todo.task} 
                        <span>
                            {todo.status !== 'Done'?<label htmlFor={todo.id}>Importent</label>:""}
                            {todo.status !== 'Done'? <input type="checkbox" id={todo.id} checked={todo.importent} onChange={()=>markImportent(todo.id) }/>:""}
                        </span>
                        <select name="" id="" onChange={(e)=>{handleChangeStatus(e.target.value, todo.id)}}>
                            <option value="ToDo" selected={quiryParam === null}>ToDo</option>
                            <option value="Progress" selected={quiryParam === 'progress'}>Progress</option>
                            <option value="Done" selected={quiryParam === 'completed'}>Done</option>
                        </select>
                        <button type="button" onClick={()=> handleViewon(todo)}>View</button>
                        <button type="button" disabled={todo.status === 'Done'} onClick={()=> handleEdit(todo)}>Edit</button>
                        <button type="button" onClick={()=> handleDelete(todo.id)}>Delete</button>
                        
                    </li>
                    
                    )
                })
            }
        </ol>
    </div>
  )
}

export default AllTasks