import {ContainerRanking, RenderData, FontNameAndRanking,NameRanking} from '../style/style'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Ranking () {
    const [players, setPlayers ] = useState([])
    const router = useRouter()
    async function RankingPlayers () {
        const data = await axios.get('https://chessfrineds.herokuapp.com/busca')
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
                            <button onClick={async () => {
                              await localStorage.setItem('id', element.id)
                              router.push('/Perfil')
                            }} style={{border: "none", outline: "none", backgroundColor: "transparent"}}>
                            <NameRanking>
                    {i+1}. {element.name}
                             </NameRanking>
                             </button>
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