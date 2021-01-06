import { useState } from 'react'
import axios from 'axios'
import {ContainerAddMatch, InputAddMatch, FontNameAndRanking, ButtonSubmit} from '../style/style'

function AddMatch () {
    const [winner, setWinner] = useState('')
    const [loser, setLoser] = useState('')
    const [empate, setEmpate] = useState(0)

    async function handleAddMatch (winner,loser,empate) {
        try {
            const response = await axios.post('http://localhost:3333/addmatch', {
            "p1": `${winner}`,
            "p2": `${loser}`,
            "empate": {
                "true": empate
            }
        })
        console.log(response)
            if(response.data === "OK") {
                alert('Partida Adicionada')
            }else {
                alert("Erro ao adicionar a partida")
            }
        }catch(err) {
            alert(`Erro ao adicionar partida!! Usuario não encontrado`)
        }
    }
    return (
        <ContainerAddMatch>
            <FontNameAndRanking>Add Partida</FontNameAndRanking>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <input onClick={() => setEmpate(1)}style={{width: 20, height: 20}} type="checkbox" /> 
                    <label><p style={{fontSize: 20, fontWeight: "bold", color: "white", marginLeft: 10}}>Empate</p></label>
            </div>
            <InputAddMatch type="text" value={winner} onChange={e => setWinner(e.target.value)} placeholder="Vencedor" />
            <InputAddMatch type="text" value={loser} onChange={e => setLoser(e.target.value)} placeholder="Derrotado" />
            <ButtonSubmit onClick={() => handleAddMatch(winner,loser,empate)}><p style={{fontSize: 12, color: "white", fontWeight: "bold", textAlign: "center"}}>Enviar</p></ButtonSubmit>
        </ContainerAddMatch>
    )
}

export default AddMatch