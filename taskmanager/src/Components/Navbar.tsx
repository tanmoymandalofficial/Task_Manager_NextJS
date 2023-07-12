"use client"

import Link from "next/link"
import {useSearchParams} from "next/navigation"

const Navbar = () => {

    // const searchParam = useSearchParams();
    // const quiryParam = searchParam.get('task');

    // console.log(quiryParam);


  return (
    <nav>
        <Link href='/'> Add Task</Link>
        <Link href='/?task=Todo'> To Do</Link>
        <Link href='/?task=progress'> In Progress</Link>
        <Link href='/?task=completed'> Completed</Link>
    </nav>
  )
}

export default Navbar