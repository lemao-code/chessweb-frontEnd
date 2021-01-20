import { useEffect } from 'react'
import {  useRouter } from 'next/router'
import {Container, HeaderChess, ContainerChildren} from '../style/style'
import Image from 'next/image'
import Ranking from '../components/Ranking'
import LastMatches from '../components/LastMatches'
import AddMatch from '../components/AddMatch'
import * as gtag from '../lib/gtag'

function Home () {

    <script data-ad-client="ca-pub-7702738899679859" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    return (
        <div style={{padding: 0, marginLeft:-10, marginTop: -20, marginBottom: -10, backgroundColor: "black", width:"120%", height: "auto"}}>
            <Container >
          
                    <Image src="/chess.webp" quality="100" responsive="true" width="1200" height="600"/>
           
                <ContainerChildren>
                    <Ranking />
                    <LastMatches />
                    <AddMatch />
                </ContainerChildren>
            </Container>
         </div>
        
    )
}

export default Home