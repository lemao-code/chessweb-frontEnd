import {ContainerRanking, RenderData, FontNameAndRanking,NameRanking} from '../style/style'
import axios from 'axios'
import { useEffect, useState } from 'react'

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
            <div>
            <FontNameAndRanking>
                Nome&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </FontNameAndRanking>
            {
                players.map((element,i) => {
                    return (
                        <RenderData key={i}>
                            <NameRanking> 
                    {i+1}. {element.name}
                             </NameRanking>
                        </RenderData>
                    )
                })
            }
            </div>
            <div>
                <FontNameAndRanking>
                    Rating
                </FontNameAndRanking>
                {
                    players.map((element,i) => {
                        return (
                            <RenderData key={i}>
                               <NameRanking>
                                   {element.rating}
                               </NameRanking>
                            </RenderData>
                        )
                    })
                }
            </div>
        </ContainerRanking>
    )
}


export default Ranking