
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
        <div className='flex justify-center gap-2 bg-orange-400	 mb-2 rounded-xl p-1.5 w-1/2  hover:drop-shadow-2xl'>
            {
                    categorias.map((categoria, i) => {
                        return (
                            <div key={i} className="rounded-xl bg-orange-200"><button className='p-1.5 text-white font-black' onClick={filtrar}>{categoria.toUpperCase()}</button></div>
                        )
                    })
            }
        </div>
    )
}