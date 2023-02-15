
export default function Categories({ todo,setfiltro}) {

    const categorias = ['TODAS', ...new Set(todo.map(tarea => tarea.categoria))]
    

    const filtrar = (e) => {
        const categoria = e.target.innerText
        
        if (categoria === 'TODAS') {
            setfiltro(todo)
            
        } else {
            setfiltro(todo.filter(e => e.categoria === categoria))
        }
    }

    return (
        <div className='flex gap-2'>
            {
                    categorias.map((categoria, i) => {
                        return (
                            <div key={i} className="border-2 border-black border-solid rounded-xl bg-black"><button className='p-2' onClick={filtrar}  >{categoria.toUpperCase()}</button></div>
                        )
                    })
            }
        </div>
    )
}