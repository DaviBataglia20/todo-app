export default function Todo({ tarea,setTodo}) {
    
    const Deletear = (ev) => {
        setTodo( prev => {
            const holdPrev = [...prev]
            return holdPrev.filter(e => e.id !== tarea.id)
        })
        
    }

    const terminada = (e) => {
        e.target.parentElement.previousElementSibling.classList.toggle('tachado')
    }
    
    return (
        <div className="flex gap-2">
            <div className="rounded-xl bg-transparent border-2  border-orange-200 p-1">
                <p>Creada en:{tarea.fecha}</p>
            </div>
            <p className="rounded-xl bg-transparent border-2  border-orange-200 p-1">{tarea.tarea}</p>
            <p className="rounded-xl bg-transparent border-2  border-orange-200 p-1">Prioridad:{tarea.prioridad}</p>
            <div className=" flex items-center gap-2 rounded-xl bg-transparent border-2  border-orange-200 px-2 ">
                <button onClick={terminada} className="w-10 h-6 rounded-md bg-green-400 hover:bg-green-600">Done</button>
                <button onClick={Deletear} className="w-10 h-6 rounded-md bg-red-400 hover:bg-red-600">X</button>
            </div>
        </div>
    )
}