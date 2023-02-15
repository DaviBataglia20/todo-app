import Todo from "../Todo/Todo";
export default function Lista({filtro,setTodo, todo}) {
    
    
    

    return (
        <div className="">
        {
        filtro.map((tarea,i) => <Todo tarea={tarea} key={i} filtro={filtro}  setTodo={setTodo} todo={todo}/>) 
        } 
        </div>
    );
}