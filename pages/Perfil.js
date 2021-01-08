import {useEffect, useState} from 'react'
import axios from 'axios'

export default function Perfil () {
    const [getperfil, setGetPerfil] = useState([])
    useEffect(() => {
        (async () => {
            const id = localStorage.getItem('id')
            try {
               
                const response = await axios.post('http://localhost:3333/perfil', {
                "id": id
                })
                getperfil.push(response.data)
                console.log(getperfil)
                setGetPerfil([...getperfil, response.data])

            }catch(err) {
                console.log('error')
            }
           
            
        })()
    },[])
    
    return (
        <div>
            {getperfil == 0 ? (
                <div>
                    sem dadooooooooooooooos
                    </div>
            ) : (
                <div>
                    {getperfil[0].perfil.map((element, i) => {
                        return (
                            <div>
                                Perfil
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <div>
                                        {element.name}
                                    </div>
                                    <div>
                                        Rating {element.rating}
                                    </div>
                                    <div>    
                                       Vitórias  {element.vitorias_total}
                                    </div>
                                    <div>
                                       Derrotas  {element.derrotas_total}
                                    </div>
                                    <div>
                                       Empates {element.empates_totais}
                                    </div>
                                </div>
                                <div>
                                    </div>
                            </div>
                        )
                    })}
                    </div>
            )}
        </div>
    )
}