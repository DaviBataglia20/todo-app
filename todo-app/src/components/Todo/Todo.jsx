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
        <div className="">
            <div className="">
                <p>Creada en:{tarea.fecha}</p>
            </div>
            <p className="">{tarea.tarea}</p>
            <p className={tarea.prioridad}>Prioridad {tarea.prioridad}</p>
            <div className=" ">
                <button onClick={terminada} className="btn done">Done</button>
                <button onClick={Deletear} className="btn delete">X</button>
            </div>
        </div>
    )
}