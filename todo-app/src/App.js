import Form from "./components/Form/Form"
import Categories from "./components/Categories/Categories";
import Lista from "./components/Todo-list/Todo-list";
import { useState, useEffect } from "react";


function App() {
  const [todo, setTodo] = useState([])
  const [filtro, setfiltro] = useState(todo)


  useEffect(() => {
    console.log(todo)
    setfiltro(todo)
  }, [todo]);


  return (
    <>
      <header className="w-full h-20 bg-orange-500">
        <p className="text-xl text-white text-center py-5 font-black tracking-wide">TODO APP</p>
      </header>
      <div className="w-1/2 bg-orange-400		 flex flex-col items-center gap-2 mx-auto mt-8 rounded-xl py-1.5 hover:drop-shadow-2xl	">
        <Form todo={todo} setTodo={setTodo} />
      </div>
      <div className="flex flex-col items-center ">
        <h2 className='tituloCateg'>Tag</h2>
        <Categories todo={todo} setfiltro={setfiltro} />
      </div>
      <Lista filtro={filtro} setTodo={setTodo} todo={todo} />
    </>
  );
}

export default App;
