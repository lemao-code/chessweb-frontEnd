import {ContainerLastMatches, FontNameAndRanking,NameLastMatchsWinner, NameLastMatchLoser, ContainerNameLastMatch, 
        BoxLastMatchs, GuideText, GuideWinner, GuideLoser, GuideEmpate, ContainerGuide} from '../style/style'
import axios from 'axios'
import { useEffect, useState } from 'react'


function LastMatchs () {

    const [lastmatchs, setLastmatchs] = useState([])
    const [empateBorder, setEmpateBorder] = useState(false)
    
    useEffect(() => {
        getLastMatchs()
    },[])

   
    async function getLastMatchs () {
        const { data } = await axios.get('http://localhost:3333/lastmatchs')
        let arrayreverse = data.reverse()
        let cortado = arrayreverse.slice(0,10)
        setLastmatchs(prevState => ([...lastmatchs, ...cortado]))
    }


    function formatDate (data) {
        const dateGame =  new Date(`${data}`)
        const formatedDate = dateGame.toString()
        const cutDate = formatedDate.slice(0,25)
      
        return (
            <div>{cutDate}</div>
        )
    }
    return (
        <ContainerLastMatches>
             <FontNameAndRanking>
                Últimas partidas
            </FontNameAndRanking>
                <ContainerGuide>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}><GuideWinner /> <GuideText>Vencedor</GuideText></div>
                   <div style={{display: "flex", flexDirection: "row",  alignItems: "center"}}> <GuideLoser /> <GuideText>Derrotado</GuideText></div>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}><GuideEmpate /> <GuideText>Empate</GuideText></div>
                </ContainerGuide>
            <BoxLastMatchs>
           <div>
            {lastmatchs.map((element, i) => {
                return (
                        <ContainerNameLastMatch key={i}>
                            <NameLastMatchsWinner colorwinner={() => element.empate ? "blue" : "green"}>{element.p1} </NameLastMatchsWinner>
                        </ContainerNameLastMatch>
                        )
            })}
           </div>
           <div >
            {lastmatchs.map((element,i) => {
                return (
                        <ContainerNameLastMatch key={i}>
                            <NameLastMatchLoser colorLoser={() => element.empate ? "blue" : "red"}> {element.p2}</NameLastMatchLoser>
                        </ContainerNameLastMatch>
                        )
                })}
            </div>
            <div style={{marginTop: -5, marginLeft: 30}}>
                {lastmatchs.map((element, i) => {
                    return (
                        <div key={i}>
                            <p style={{fontSize: 13, color: "#00FFFF", marginTop: 15}}>{formatDate(element.data)}</p>
                        </div>
                    )
                })}
            </div>
            </BoxLastMatchs>
        </ContainerLastMatches>
    )
}


export default LastMatchs