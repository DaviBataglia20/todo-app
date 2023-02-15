import { useState } from "react";
import "./Form.css"
export default function Form({todo,setTodo,}){
    
    const [tarea, setTarea] = useState('');
    const [categoria, setCategoria] = useState('Others');
    const [prioridad, setPrioridad] = useState('Low');

    const id = () => {
        const char = `aqzxswedcvfrtgbnh123456789`
        let result = []
        for (let index = 0; index < char.length; index++) {
            result += char[Math.floor(Math.random() * char.length)]
            
        }
        return result
    }


    
    const añadirTodo = (e) =>{
        e.preventDefault()

        
        if ((todo.findIndex(e => e.tarea.toLowerCase() === tarea.toLowerCase()) > -1)) {
            alert('Esta tarea ya la has colocado')
         }
         else{
            let fecha = new Date()
            setTodo(prev =>
                [...prev, {
                    tarea: tarea ,
                    categoria:  categoria ,
                    prioridad:  prioridad ,
                    fecha: `${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()}`,
                    id: id()
                }]
            )
         }
    }
    return(
        <>
        <p className="text-white p-12 text-center font-bold	font-black	">Nueva actividad</p>
        <form onSubmit={añadirTodo}>
            <div className="bg-violet-900 flex justify-center gap-2 ">
                <input className="rounded-xl" onChange={(e) => setTarea(e.target.value)} name='tarea' type="text" placeholder=" Escriba una actividad" />
                <input className="rounded-xl" onChange={(e) => setCategoria(e.target.value.toUpperCase())} type="text" placeholder=" añade una tag" />
            </div>
             <div className="flex flex-col">
                <label className="text-white" htmlFor="priority">Esta Tarea tiene que prioridad</label>
                <select className="rounded-xl" value={prioridad} onChange={(e) => setPrioridad(e.target.value)} name="prioridad" id="prioridad">
                    <option value="Low">Relax</option>
                    <option value="Medium">La puedes hacer hoy</option>
                    <option value="High">Urgente</option>
                </select>
            </div>
            <button className="text-white text-center mx-auto w-full">añadir tarea</button>
        </form>
        </>
    )
}
