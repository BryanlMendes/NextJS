import { useState } from "react"

export default function Form(){
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [usuarios, setUsuarios] = useState([])

    async function salvarUsuario(){
       await fetch('api/form', {
            method:'POST',
            body: JSON.stringify({nome, idade})
        })

        const resp = await fetch('api/form')
        const usuarios = await resp.json()
        setUsuarios(usuarios)
    }
    
    function rederizarUsuarios(){
        console.log(usuarios)
        return usuarios.map((usuario, i) => {
            return <li key={i}>{usuario.nome} tem {usuario.idade} anos</li>
        })
    }

    return(
        <div>
            <h1>Integrando com API #02</h1>
            <input type="text" value={nome}
            onChange={e => setNome(e.target.value)}/>
            <input type="number" value={idade}
            onChange={e => setIdade(+e.target.value)}/>
            <button onClick={salvarUsuario}>Enviar</button>

            <ul>
                {rederizarUsuarios()}
            </ul>
        </div>
    )
}