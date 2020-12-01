import {ContainerLastMatches} from '../style/style'
import axios from 'axios'
import { useEffect, useState } from 'react'


function LastMatchs () {   
    const [lastmatchs, setLastmatchs] = useState([])
    async function getLastMatchs () {
        const data = await axios.get('http://localhost:3333/lastmatchs')
        setLastmatchs(data.data)
    }
    useEffect(() => {
        getLastMatchs()
    },[])


    return (
        <ContainerLastMatches>
            {lastmatchs.map((element, i) => {
               while(i <=5 ) {
                   return (
                   <div>{element.p1} {element.p2}</div>
                   )
               } 
            })}
        </ContainerLastMatches>
    )
}


export default LastMatchs