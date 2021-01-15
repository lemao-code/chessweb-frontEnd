import {useEffect, useState} from 'react'
import {PerfilWords} from '../style/style'
import Contras from '../components/Contras'
import axios from 'axios'

export default function Perfil () {
    const [getperfil, setGetPerfil] = useState([])
    useEffect(() => {
        (async () => {
            const id = localStorage.getItem('id')
            try {
               
                const response = await axios.post('https://chessfrineds.herokuapp.com/perfil', {
                "id": id
                })
                getperfil.push(response.data)
                setGetPerfil([...getperfil, response.data])

            }catch(err) {
                console.log('error')
            }
           
            
        })()
    },[])
    
    return (
    
        <div style={{backgroundColor: "black" , marginTop: -30, marginLeft: -10, marginRight: -5, marginBottom: -30, width: "110%", height: "110%"}} >
            {getperfil == 0 ? (
                <div>
                    sem dadooooooooooooooos
                    </div>
            ) : (
                <div>
                    {getperfil[0].perfil.map((element, i) => {
                        return (
                            <div key={i} >
                                <p style={{color: "white", fontSize: 29, fontWeight: "bold" , textAlign: "center"}}>Perfil</p>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <div>
                                        <p style={{fontSize: 30, fontWeight: "bold", color: "#00FFFF", textAlign: "center"}}>{element.name}</p>
                                    </div>
                                    <div>
                                        <PerfilWords> Rating &nbsp;&nbsp;&nbsp;{element.rating}</PerfilWords>
                                    </div>
                                    <div>    
                                       <PerfilWords> Vitórias &nbsp;&nbsp;&nbsp;{element.vitorias_total}</PerfilWords> 
                                    </div>
                                    <div>
                                    <PerfilWords> Derrotas&nbsp;&nbsp;&nbsp;  {element.derrotas_total} </PerfilWords>
                                    </div>
                                    <div>
                                       <PerfilWords>Empates&nbsp;&nbsp;&nbsp; {element.empates_totais} </PerfilWords>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                   <p style={{color: "white", textAlign: "center", fontSize: 25, color: "#FFD700", fontWeight: "bold"}}>Contras</p>
                   <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <p style={{color: "green" , textAlign: "center"}}> Vitoria </p> <p style={{color: "white", fontWeight:"bold", marginLeft: 10}}>/</p>
                        <p style={{color: "red" , textAlign: "center", marginLeft: 10}}> Derrota </p> <p style={{color: "white", fontWeight:"bold", marginLeft:10}}>|</p>
                        <p style={{color: "blue" , textAlign: "center", marginLeft: 10}}>Empate</p>
                    </div>
                    {getperfil[0].contras.map((element, i) => {

                        return  <Contras key={i} contras={element} />
                        
                    })}
                    </div>
            )}
        </div>
    
    )
}