import Todo from "../Todo/Todo";
export default function Lista({filtro,setTodo, todo}) {
    
    
    

    return (
        <div className=" flex flex-col bg-orange-400 p-2 m-2 rounded-md gap-2">
        {
        filtro.map((tarea,i) => <Todo tarea={tarea} key={i} filtro={filtro}  setTodo={setTodo} todo={todo}/>) 
        } 
        </div>
    );
}