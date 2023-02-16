export default function Todo({ tarea,setTodo}) {
    
    const Deletear = (ev) => {
        setTodo( prev => {
            const holdPrev = [...prev]
            return holdPrev.filter(e => e.id !== tarea.id)
        })
        
    }

    const terminada = (e) => {
        e.target.parentElement.parentElement.style.cssText += "background-color:#50C878;filter: blur(0.5px)"; 
    }
    
    return (
        <div className="flex gap-2 transition-all duration-500" id={tarea.id}>
            <div className="rounded-xl bg-transparent border-2  border-orange-200 p-1">
                <p>fecha de creación:{tarea.fecha}</p>
            </div>
            <p className="rounded-xl bg-transparent border-2  border-orange-200 p-1">Tarea: {tarea.tarea}</p>
            <p className="rounded-xl bg-transparent border-2  border-orange-200 p-1">Prioridad:{tarea.prioridad}</p>
            <div className=" flex items-center gap-2 rounded-xl bg-transparent border-2  border-orange-200 px-2 ">
                <button onClick={terminada} className="w-20 h-6 rounded-md bg-green-400 hover:bg-green-600">Complete</button>
                <button onClick={Deletear} className="w-10 h-6 rounded-md bg-red-400 hover:bg-red-600">X</button>
            </div>
        </div>
    )
}