import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineEdit, MdDeleteForever } from "react-icons/md";


// #D6536D FFA2B6
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFin, setshowFin] = useState(false)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
  }, [])
  
  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleEdit = (e, id)=>{
    let newTodos = todos.filter((item)=>{
      return item.id === id;
    })
    setTodo(newTodos[0].todo)
    newTodos = todos.filter((item)=>{
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLS()
  }
  const handleDelete = (e, id)=>{
    let newTodos = todos.filter((item)=>{
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLS()
  }
  const handleAdd = ()=>{
    setTodos([...todos, {"id":uuidv4(), todo, "isCompleted": false}])
    setTodo("")
    console.log(todos)
    saveToLS()
  }
  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
  const handleCheckbox=(e)=>{
    let id = e.target.name;
    let idx = todos.findIndex((item)=>{
      return item.id == id;
    })
    const newTodos = [...todos]
    newTodos[idx].isCompleted = !newTodos[idx].isCompleted
    setTodos(newTodos)
    saveToLS()
  }
  const toggleFinshed =(e) => {
    setshowFin(!showFin)
  }
  

  return (
    <>
      <Navbar/>
      
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-[#EFB11D] min-h-[80vh] md:w-[40%]">
      <h1 className="font-bold text-3xl text-center">MyTodo-The Ultimate Todo List</h1>
      <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-xl font-bold'>Add a Todo</h2>
          <div className="flex">
          <input type="text" value={todo} onChange={handleChange} className='w-full rounded-full px-5 py-1' />
          <button onClick={handleAdd} disabled={todo.length<3} className='bg-[#db405f]  hover:bg-[#ea0d39] mx-2 rounded-full disabled:bg-[#ec6883] p-4 py-2 text-sm font-bold text-white cursor-pointer'>Add</button>
          </div>
        </div>
        <div className="todos">
        <input type="checkbox" name="" onChange={toggleFinshed}  id="" checked={showFin} /><label className="mx-3 font-bold">Show Finished</label>
        <div className="line h-[1px] my-2 bg-black w-full"></div> 
          <h2 className="text-xl font-bold mb-2">My Todos</h2>
          {todos.length === 0 && <div className="my-3">No todos to display ;) enter now :)</div>}
          
          {todos.map(item=>{return ((showFin || !item.isCompleted) && <div key={item.id} className="todo flex my-3 justify-between">
            <div className="flex gap-3">
            <input type="checkbox"  name={item.id} checked={item.isCompleted} id="" onChange={handleCheckbox}/>
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
                
                <div className="buttons flex h-full">
                  <button onClick={(e)=>handleEdit(e, item.id)} className='bg-[#db405f]  hover:bg-[#ea0d39] p-2 text-sm font-bold text-white rounded-md mx-1'><MdOutlineEdit /></button>
                  <button onClick={(e)=>handleDelete(e, item.id)} className='bg-[#db405f]  hover:bg-[#ea0d39] p-2 text-sm font-bold text-white rounded-md mx-1'><MdDeleteForever /></button>
                </div>
           </div>)
          })}

        </div>
      </div>
    </>
  );
}

export default App;
