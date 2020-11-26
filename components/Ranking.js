import {ContainerRanking, RenderData, FontNameAndRanking,NameRanking, Separator} from '../style/style'
import axios from 'axios'
import { useEffect, useState } from 'react'
const zero = 0;

function Ranking () {
    const [players, setPlayers ] = useState([])
    async function RankingPlayers () {
        const data = await axios.get('http://localhost:3333/busca')
        setPlayers(data.data)
    }
    useEffect(() => {
        
       RankingPlayers()
    },[])
    players.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))// colocando array em ordem decrescente
    return (
        <ContainerRanking>
            <FontNameAndRanking>
                Nome&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating
            </FontNameAndRanking>
            {
                players.map((element,i) => {
                    return (
                        <RenderData>
                            <NameRanking> 
                    {i+1}. {element.name} 
                             </NameRanking>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <NameRanking>{element.rating}</NameRanking>
                        </RenderData>
                    )
                })
            }
        </ContainerRanking>
    )
}


export default Ranking