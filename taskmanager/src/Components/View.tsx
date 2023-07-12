"use client"

import { useTodos } from "@/store/Todos"


const View = () => {
  const { viewEdit } = useTodos();

  // console.log(viewEdit);

  return (
    <div>
      <p>{viewEdit.importent ? "Importent" : "Not Importent"}</p>
      <h2>Titel: {viewEdit.task}</h2>
      <p><b>Description: </b>{viewEdit.description}</p>
      <p><b>Status: </b>{viewEdit.status}</p>
      
    </div>
  )
}

export default View